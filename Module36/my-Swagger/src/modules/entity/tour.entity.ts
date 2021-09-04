import {ApiProperty} from '@nestjs/swagger';

export class Tour{
	@ApiProperty()
	id_card: number;
	
	
	@ApiProperty()
	rental_period: string;
	
	
	@ApiProperty()
	provision: string;
	

	@ApiProperty()
	mark:string;
	
	
	@ApiProperty()
	model: string;
	
	
	@ApiProperty()
	price_rental: string;
	
}