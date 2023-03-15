import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { User } from './interface/user.interface';

@Injectable()
export class UserService {
  private users: User[] = [];
  async createUser(user: CreateUserDTO): Promise<User> {
    return { ...user, id: 1 };
  }
}
