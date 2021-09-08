import { Injectable } from '@nestjs/common';
import {User} from '../entity/user.entity';

@Injectable()
export class UsersRepository {
	private users=[];
	
	
	getAll(){
		return this.users;
	}
	createUser(user:User){
		user.id_card=Date.now().toString();
		this.users.push(user);
		return user;
	}
	