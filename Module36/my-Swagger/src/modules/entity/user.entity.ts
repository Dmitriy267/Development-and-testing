import {ApiProperty} from '@nestjs/swagger';

export class User{
	
	@ApiProperty({
		type: 'string',
		minLength:3,
		maxLength:40,
	})
	fullname: string;
	
	@ApiProperty()
	birth: string;
	
	@ApiProperty()
	passport:number;
	
	@ApiProperty({
		type: 'integer',
		minimum:5,
		maximum: 11,
	})
	phone: number;
	
	@ApiProperty({
		type: 'string',
		format: 'email'
	})
	mail: string;
	
	
	
}