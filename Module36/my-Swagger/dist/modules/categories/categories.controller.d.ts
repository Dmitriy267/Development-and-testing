import { CategoriesService } from './categories.service';
import { Category } from '../entity/category.entity';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(): Promise<Category[]>;
    findOne(params: any): Category;
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
    update(updateCategoryDto: UpdateCategoryDto): Promise<Category>;
    remove(auto_category: string): string;
}
