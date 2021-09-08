import {Test} from '@nestjs/testing';
import {UsersController } from './users.controller';
import {UsersService} from './users.service';
import {User} from './user.interface';
describe('UsersController',()=>{
	let usersController: UsersController;
	let usersService: UsersService;
	
	beforeEach(async()=>{
		const moduleRef=await Test.createTestingModule({
			controllers: [UsersController],
			providers: [UsersService],
		}).compile();
		usersService=moduleRef.get<UsersService> (UsersService);
		usersController=moduleRef.get <UsersController>(UsersController);
	});
	describe ('findAll',()=>{
	test('should return an array of users', async ()=>{
		const result: User[]=[
		{
			id_card: number;
	fullname: "Ivanov";
	birth: "17.09.1981";
	passport:"36065981";
	phone: "89271073492";
	mail: "Ivanov38@mail.ru";
		},
		];
		jest.spyOn(usersService, 'findAll').mockImplementation(() => result);
		
		  expect(await usersController.findAll()).toBe(result);
	});
	});
});