import { IsInt, IsString } from 'class-validator';

export class CreateTourDto {
  @IsInt()
  readonly id_card: number;
  
  @IsString()
  readonly rental_period: string;
  
  @IsString()
  readonly provision: string;
  
  @IsString()
  readonly mark: string;
  
  @IsString()
  readonly model: string;
  
  @IsString()
  readonly price_rental: string;
  
}
  