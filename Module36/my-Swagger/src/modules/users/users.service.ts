import { Injectable } from '@nestjs/common';
import {User} from '../entity/user.entity';
import {CreateUserDto} from '../dto/create-user.dto';
import {UpdateUserDto} from '../dto/update-user.dto';

@Injectable()
export class UsersService {
	private readonly users: User[]=[];
	
	create (user: CreateUserDto):User{
		this.users.push(user);
		return user;
	}
	findOne(id_card:number):User{
		return this.users[id_card];
	}
	
	update (user: UpdateUserDto):User{
		this.users.push(user);
		return user;
	}
	
	 findAll(): User[] {
    return this.users;
  }
	
}
	