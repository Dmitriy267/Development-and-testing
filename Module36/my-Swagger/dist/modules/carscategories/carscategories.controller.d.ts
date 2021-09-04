import { CarsCategoriesService } from './carscategories.service';
import { CarsCategory } from '../entity/carscategory.entity';
import { CreateCarsCategoryDto } from '../dto/create-carscategory.dto';
import { UpdateCarsCategoryDto } from '../dto/update-carscategory.dto';
export declare class CarsCategoriesController {
    private readonly carscategoriesService;
    constructor(carscategoriesService: CarsCategoriesService);
    findAll(): Promise<CarsCategory[]>;
    findOne(params: any): CarsCategory;
    create(createCarsCategoryDto: CreateCarsCategoryDto): Promise<CarsCategory>;
    update(updateCarsCategoryDto: UpdateCarsCategoryDto): Promise<CarsCategory>;
    deleteCarsCategory(id_unique: number): string;
}
