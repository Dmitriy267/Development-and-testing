import { UsersService } from './users.service';
import { User } from '../entity/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
    findOne(params: any): User;
    create(createUserDto: CreateUserDto): Promise<User>;
    update(updateUserDto: UpdateUserDto): Promise<User>;
    remove(id_card: number): string;
}
