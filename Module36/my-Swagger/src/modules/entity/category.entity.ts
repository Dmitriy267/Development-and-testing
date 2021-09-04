import {ApiProperty} from '@nestjs/swagger';

export class Category{
	
	@ApiProperty()
	passenger_car: string;
	
	
	@ApiProperty()
	cargo_truck: string;
	
	
	@ApiProperty()
	minibuses: string;
	
	@ApiProperty()
	bike: string;
	
	
}