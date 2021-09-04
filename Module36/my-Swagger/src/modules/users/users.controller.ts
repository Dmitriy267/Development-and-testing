import {Controller, Get, Post, Put, Delete, Body, Param, HttpCode} from '@nestjs/common';
import {UsersService} from './users.service';
//import {User} from './user.interface';
import{ApiTags, ApiHeader,  ApiResponse } from '@nestjs/swagger';
import {User} from '../entity/user.entity';
import {CreateUserDto } from '../dto/create-user.dto';
import {UpdateUserDto} from '../dto/update-user.dto';

@ApiTags('users')
@ApiHeader({
	name:'List of users',
	description: 'A group of people who rent cars'
})
@Controller('users')
export class UsersController{
	constructor (private readonly usersService: UsersService){}
	@Get()
	async findAll():Promise<User[]>{
		return this.usersService.findAll();
	}
	@Get(':id_card')
	@ApiResponse({status:200, 
	description:'The record has been successfully get',
	type: User,
	})
	findOne(@Param()params){
		console.log('Get user ', params.id_card);
		return this.usersService.findOne(Number(params.id_card));
	}
	@ApiTags('create users')
	@Post()
	@HttpCode(204)
	@ApiResponse({status:204, description:'The record has been successfully created',
	type: User,
	})
	async create(@Body() createUserDto:CreateUserDto): Promise<User>{
		console.log('Create user ', User);
		return this.usersService.create(createUserDto);
	}
	@Put()
	@ApiResponse({description:'Successful update of user data'})
	async update(@Body() updateUserDto:UpdateUserDto):Promise<User> {
		console.log('Update user ', User);
		return this.usersService.update(updateUserDto);
	}
	@Delete(':id_card')
	@ApiResponse({description:'Successful deletion of user data'})
	 remove(@Param('id_card') id_card: number ){
	console.log('Delete user ');
	 return `This action removes a #${id_card} user`;
	
	}
}