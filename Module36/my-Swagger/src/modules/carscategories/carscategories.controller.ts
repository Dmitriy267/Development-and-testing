import {Controller, Get, Post, Put, Delete, Body, Param, HttpCode} from '@nestjs/common';
import {CarsCategoriesService} from './carscategories.service';
//import {CarsCategory} from './carscategory.interface';
import{ApiTags, ApiHeader,  ApiResponse } from '@nestjs/swagger';
import {CarsCategory} from '../entity/carscategory.entity';
import {CreateCarsCategoryDto } from '../dto/create-carscategory.dto';
import {UpdateCarsCategoryDto} from '../dto/update-carscategory.dto';

@ApiTags('carscategories')
@ApiHeader({
	name:'List of carscategories',
	description: 'General information about cars with categories'
})
@Controller('carscategories')
export class CarsCategoriesController{
	constructor (private readonly carscategoriesService: CarsCategoriesService){}
	@Get()
	async findAll():Promise<CarsCategory[]>{
		return this.carscategoriesService.findAll();
	}
	@Get(':id_unique')
	@ApiResponse({status:200, description:'The record has been successfully get',
	type: CarsCategory,
	})
	findOne(@Param()params){
		console.log('Get carscategory ', params.id_unique);
		return this.carscategoriesService.findOne(Number(params.id_unique));
	}
	@ApiTags('create carscategories')
	@Post()
	@HttpCode(204)
	@ApiResponse({status:204, description:'The record has been successfully created',
	type: CarsCategory,
	})
	async create(@Body() createCarsCategoryDto:CreateCarsCategoryDto): Promise<CarsCategory>{
		console.log('Create carscategory ', CarsCategory);
		return this.carscategoriesService.create(createCarsCategoryDto);
	}
	@Put()
	@ApiResponse({description:'Successful update of carscategories data'})
	async update(@Body() updateCarsCategoryDto:UpdateCarsCategoryDto):Promise<CarsCategory> {
		console.log('Update  carscategory', CarsCategory);
		return this.carscategoriesService.update(updateCarsCategoryDto);
	}
	@Delete(':id_unique')
	@ApiResponse({description:'Successful deletion of carscategories data'})
	deleteCarsCategory(@Param('id_unique') id_unique: number){
	console.log('Delete  carscategory');	
	 return `This action removes a #${id_unique} carscategories`;
	}
}