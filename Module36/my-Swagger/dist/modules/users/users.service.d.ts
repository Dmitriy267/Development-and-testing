import { User } from '../entity/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
export declare class UsersService {
    private readonly users;
    create(user: CreateUserDto): User;
    findOne(id_card: number): User;
    update(user: UpdateUserDto): User;
    findAll(): User[];
}
