import { Category } from '../entity/category.entity';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
export declare class CategoriesService {
    private readonly categories;
    findAll(): Category[];
    findOne(auto_category: string): Category;
    create(category: CreateCategoryDto): Category;
    update(category: UpdateCategoryDto): Category;
}
