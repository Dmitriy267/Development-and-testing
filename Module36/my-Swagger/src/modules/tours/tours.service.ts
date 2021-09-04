import {Injectable} from '@nestjs/common';
import {Tour} from '../entity/tour.entity';
import {CreateTourDto} from '../dto/create-tour.dto';
import {UpdateTourDto} from '../dto/update-tour.dto';

@Injectable()
export class ToursService{
	private readonly tours: Tour[]=[];
	
	findAll():Tour[]{
		return this.tours;
	}
	
	findOne(state_number:string):Tour{
		return this.tours[state_number];
	}
	
	 create (tour: CreateTourDto):Tour{
		this.tours.push(tour);
		return tour;
	
	}
	update(tour: UpdateTourDto):Tour{
		this.tours.push(tour);
		return tour;
	}
	
	
}
	