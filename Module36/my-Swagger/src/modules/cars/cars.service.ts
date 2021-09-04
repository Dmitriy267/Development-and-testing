import { Injectable } from '@nestjs/common';
import {Car} from '../entity/car.entity';
import {CreateCarDto} from '../dto/create-car.dto';
import {UpdateCarDto} from '../dto/update-car.dto';

@Injectable()
export class CarsService {
	private readonly cars: Car[]=[];
	
	findAll():Car[]{
		return this.cars;
	}
	
	findOne(state_number:string):Car{
		return this.cars[state_number];
	}
	
	create(car:CreateCarDto ):Car{
		this.cars.push(car);
		return car;
	}
	update(car: UpdateCarDto ):Car{
		 this.cars.push(car);
		 return car;
	}
	
}
	