import { Car } from '../entity/car.entity';
import { CreateCarDto } from '../dto/create-car.dto';
import { UpdateCarDto } from '../dto/update-car.dto';
export declare class CarsService {
    private readonly cars;
    findAll(): Car[];
    findOne(state_number: string): Car;
    create(car: CreateCarDto): Car;
    update(car: UpdateCarDto): Car;
}
