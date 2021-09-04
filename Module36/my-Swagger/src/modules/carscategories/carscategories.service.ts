import { Injectable } from '@nestjs/common';
import {CarsCategory} from '../entity/carscategory.entity';
import {CreateCarsCategoryDto} from '../dto/create-carscategory.dto';
import {UpdateCarsCategoryDto} from '../dto/update-carscategory.dto';

@Injectable()
export class CarsCategoriesService {
	private readonly carscategories: CarsCategory[]=[];
	
	findAll():CarsCategory[]{
		return this.carscategories;
	}
	
	findOne(id_unique:number):CarsCategory{
		return this.carscategories[id_unique];
	}
	
	create(carscategory: CreateCarsCategoryDto):CarsCategory{
	this.carscategories.push(carscategory);
	return carscategory;
	}
	 update (carscategory: UpdateCarsCategoryDto):CarsCategory{
	 this.carscategories.push(carscategory );
	 return carscategory;
	}
	
}
	