import {ApiProperty} from '@nestjs/swagger';

export class Car{

	@ApiProperty()
	owner: string;
	
	@ApiProperty()
	mark:string;
	
	@ApiProperty()
	model: string;
	
	@ApiProperty()
	years: number;
	
	@ApiProperty()
	description_auto: string;
	
	@ApiProperty()
	price_rental: string;
	
}