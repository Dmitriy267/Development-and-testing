import { IsInt, IsString } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  readonly owner: string;
  
  @IsString()
  readonly mark: string;

    @IsString()
  readonly model: string;
  
   @IsInt()
  readonly years: number;

  @IsString()
  readonly description_auto: string;
  
   @IsString()
  readonly price_rental: string;
}