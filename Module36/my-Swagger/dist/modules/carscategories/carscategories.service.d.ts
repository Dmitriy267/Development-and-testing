import { CarsCategory } from '../entity/carscategory.entity';
import { CreateCarsCategoryDto } from '../dto/create-carscategory.dto';
import { UpdateCarsCategoryDto } from '../dto/update-carscategory.dto';
export declare class CarsCategoriesService {
    private readonly carscategories;
    findAll(): CarsCategory[];
    findOne(id_unique: number): CarsCategory;
    create(carscategory: CreateCarsCategoryDto): CarsCategory;
    update(carscategory: UpdateCarsCategoryDto): CarsCategory;
}
