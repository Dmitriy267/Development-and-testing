import {User} from '../entity/user.entity';
import {UsersRepository} from '../repositories/user.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

class UsersRepositoryMock extends UsersRepository{
	public getAll():any []{
		return [];
}
public createUser(user: User): User{
	return null;
}
}
describe('Users Service', ()=>{
	let usersService: UsersService;
	let usersRepository: UsersRepository;
	 beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      
      providers: [
	  UsersService,
	  {
		  provide: UsersRepository,
		  useClass: UsersRepositoryMock
	  }
	  ],
    }).compile();
	
     usersService=app.get(UsersService);
	 usersRepository=app.get(UsersRepository);
   
  });
  test ('should return users on call getUsers method', ()=>{
	  const mockUsers=[{
		  id_card: "1",
		  fullname: "Some Name",
		  birth: "Some Birth",
		  passport: "Some passport",
		  phone: "Some phone",
		  mail: "Some mail",
		  
	  }];
	  
	  const usersRepositorySpy=jest.spyOn(usersRepository, 'getAll').mockReturnValue(mockUsers);
	  const result=usersService.findAll();
	  
	  expect (result.length).toEqual(mockUsers.length);
	  expect (result[0].id_card).toEqual(mockUsers[0].id_card);
	  expect(usersRepositorySpy).toHaveBeenCalled();
	  expect (usersRepositorySpy).toHaveBeenCalledTimes(1);
  });
});