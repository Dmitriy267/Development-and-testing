import {Injectable} from '@nestjs/common';
import {Category} from '../entity/category.entity';
import {CreateCategoryDto} from '../dto/create-category.dto';
import {UpdateCategoryDto} from '../dto/update-category.dto';

@Injectable()
export class CategoriesService{
	
	private readonly categories: Category[]=[];

	findAll():Category[]{
		return this.categories;
	}
	
	findOne(auto_category:string):Category{
		return this.categories[auto_category];
	}
	
	 create (category: CreateCategoryDto):Category{
		 this.categories.push(category);
		 return category;
	}
	 update (category: UpdateCategoryDto):Category{
	 this.categories.push(category);
	 return category;
	}
	
	
}
	
	