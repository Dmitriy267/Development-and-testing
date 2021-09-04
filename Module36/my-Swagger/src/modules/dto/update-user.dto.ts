import { IsInt, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  readonly fullname: string;
  
  @IsString()
  readonly birth: string;

  @IsInt()
  readonly passport: number;
  
   @IsInt()
  readonly phone: number;

  @IsString()
  readonly mail: string;
}