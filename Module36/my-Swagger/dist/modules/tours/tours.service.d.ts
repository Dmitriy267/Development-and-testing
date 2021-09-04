import { Tour } from '../entity/tour.entity';
import { CreateTourDto } from '../dto/create-tour.dto';
import { UpdateTourDto } from '../dto/update-tour.dto';
export declare class ToursService {
    private readonly tours;
    findAll(): Tour[];
    findOne(state_number: string): Tour;
    create(tour: CreateTourDto): Tour;
    update(tour: UpdateTourDto): Tour;
}
