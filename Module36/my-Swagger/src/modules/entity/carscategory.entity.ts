import {ApiProperty} from '@nestjs/swagger';

export class CarsCategory{
	
	@ApiProperty()
	state_number: string;
	
	@ApiProperty()
	auto_category: string;
	
}