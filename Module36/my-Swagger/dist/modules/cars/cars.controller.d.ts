import { CarsService } from './cars.service';
import { Car } from '../entity/car.entity';
import { CreateCarDto } from '../dto/create-car.dto';
import { UpdateCarDto } from '../dto/update-car.dto';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    findAll(): Promise<Car[]>;
    findOne(params: any): Car;
    create(createCarDto: CreateCarDto): Promise<Car>;
    update(updateCarDto: UpdateCarDto): Promise<Car>;
    deleteCar(state_number: string): string;
}
