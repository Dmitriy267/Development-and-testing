import {Controller, Get, Post, Put, Delete, Body, Param, HttpCode} from '@nestjs/common';
import {CarsService} from './cars.service';
//import {Car} from './car.interface';
import{ApiTags, ApiHeader,  ApiResponse } from '@nestjs/swagger';
import {Car} from '../entity/car.entity';
import {CreateCarDto } from '../dto/create-car.dto';
import {UpdateCarDto} from '../dto/update-car.dto';

@ApiTags('cars')
@ApiHeader({
	name:'List of cars',
	description: 'Choosing the right car'
})
@Controller('cars')
export class CarsController{
	constructor (private readonly carsService: CarsService){}
	@Get()
	async findAll(): Promise<Car[]>{
		return this.carsService.findAll();
	}
	@Get(':state_number')
	@ApiResponse({status:200, description:'The record has been successfully get',
	type:Car,
	})
	findOne(@Param()params){
		console.log('Get car ', params.state_number);
		return this.carsService.findOne(params.state_number);
	}
	@ApiTags('create cars')
	@Post()
	@HttpCode(204)
	@ApiResponse({status:204, description:'The record has been successfully created',
	type: Car,
	})
	async create(@Body() createCarDto:CreateCarDto):Promise<Car>{
		console.log('Create car ', Car);
		return this.carsService.create(createCarDto);
	}
	@Put()
	@ApiResponse({description:'Successful update of car data'})
	async update(@Body() updateCarDto:UpdateCarDto):Promise<Car> {
		console.log('Update car ', Car);
		return this.carsService.update(updateCarDto);
	}
	@Delete(':state_number')
	@ApiResponse({description:'Successful deletion of car data'})
	deleteCar(@Param('state_number') state_number:string){
	console.log('Delete car ');	
    return `This action removes a #${state_number} car`;
	
	}
}