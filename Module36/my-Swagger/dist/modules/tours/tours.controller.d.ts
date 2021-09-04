import { ToursService } from './tours.service';
import { Tour } from '../entity/tour.entity';
import { CreateTourDto } from '../dto/create-tour.dto';
import { UpdateTourDto } from '../dto/update-tour.dto';
export declare class ToursController {
    private readonly toursService;
    constructor(toursService: ToursService);
    findAll(): Promise<Tour[]>;
    findOne(params: any): Tour;
    create(createTourDto: CreateTourDto): Promise<Tour>;
    update(updateTourDto: UpdateTourDto): Promise<Tour>;
    remove(state_number: string): string;
}
