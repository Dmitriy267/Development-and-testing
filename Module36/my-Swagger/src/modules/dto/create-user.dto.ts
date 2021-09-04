import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {
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