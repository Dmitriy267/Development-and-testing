import {Controller, Get, Post, Put, Delete, Body, Param, HttpCode} from '@nestjs/common';
import {ToursService} from './tours.service';
//import {Tour} from './tour.interface';
import{ApiTags, ApiHeader,  ApiResponse } from '@nestjs/swagger'
import {Tour} from '../entity/tour.entity';
import {CreateTourDto } from '../dto/create-tour.dto';
import {UpdateTourDto} from '../dto/update-tour.dto'; 

@ApiTags('tours')
@ApiHeader({
	name:'List of tours',
	description: 'Information about trips'
})
@Controller('tours')
export class ToursController{
	constructor (private  readonly toursService: ToursService){}
	@Get()
	async findAll(): Promise<Tour[]>{
		return this.toursService.findAll();
	}
	@Get(':state_number')
	@ApiResponse({status:200, description:'The record has been successfully get',
	type: Tour,
	})
	findOne(@Param()params){
		console.log('Get tour ', params.state_number);
		return this.toursService.findOne(params.state_number);
	}
	@ApiTags('create tours')
	@Post()
	@HttpCode(204)
	@ApiResponse({status:204, description:'The record has been successfully created',
	type: Tour,
	})
	async create (@Body() createTourDto:CreateTourDto){
		console.log('Create tour ', Tour);
		return this.toursService.create(createTourDto);
	}
	@Put()
		@ApiResponse({description:'Successful update of tour data'})
	async update(@Body() updateTourDto:UpdateTourDto){
		console.log('Update tour ', Tour);
		return this.toursService.update(updateTourDto);
	}
	@Delete(':state_number')
	@ApiResponse({description:'Successful deletion of tour data'})
	remove(@Param('state_number') state_number: string ){
	console.log('Delete tour ');	
	 return `This action removes a #${state_number} tour`;
	
	}
}