import {Controller, Get, Post, Put, Delete, Body, Param, HttpCode} from '@nestjs/common';
import {CategoriesService} from './categories.service';
//import {Category} from './category.interface';
import{ApiTags, ApiHeader,  ApiResponse } from '@nestjs/swagger';
import {Category} from '../entity/category.entity';
import {CreateCategoryDto } from '../dto/create-category.dto';
import {UpdateCategoryDto} from '../dto/update-category.dto';

@ApiTags('categories')
@ApiHeader({
	name:'List of categories',
	description: 'Category of cars for rent'
})
@Controller('categories')
export class CategoriesController{
	constructor (private readonly categoriesService: CategoriesService){}
	@Get()
	async findAll():Promise<Category[]>{
		return this.categoriesService.findAll();
	}
	@Get(':auto_category')
	@ApiResponse({status:200, description:'The record has been successfully get',
	type:Category,
	})
	findOne(@Param()params){
		console.log('Get category ', params.auto_category);
		return this.categoriesService.findOne(params.auto_category);
	}
	@ApiTags('create categories')
	@Post()
	@HttpCode(204)
	@ApiResponse({status:204, description:'The record has been successfully created',
	type: Category,
	})
	async create(@Body() createCategoryDto:CreateCategoryDto): Promise<Category>{
		console.log('Create category ', Category);
		return this.categoriesService.create(createCategoryDto);
	}
	@Put()
	@ApiResponse({description:'Successful update of category data'})
	async update(@Body() updateCategoryDto:UpdateCategoryDto ): Promise<Category>{
		console.log('Update category ', Category);
		return this.categoriesService.update(updateCategoryDto);
	}
	@Delete(':auto_category')
	@ApiResponse({description:'Successful deletion of category data'})
	remove(@Param('auto_category') auto_category:string){
	console.log('Delete category ');
 return `This action removes a #${auto_category} category`;	
	
	}
}