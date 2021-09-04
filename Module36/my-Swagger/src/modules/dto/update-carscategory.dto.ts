import { IsInt, IsString } from 'class-validator';

export class UpdateCarsCategoryDto {
  @IsString()
  readonly state_number: string;
  
  @IsString()
  readonly auto_category: string;

 
}