import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  readonly passenger_car: string;
  
  @IsString()
  readonly cargo_truck: string;
  
  @IsString()
  readonly minibuses: string;
  
    @IsString()
  readonly bike: string;
}