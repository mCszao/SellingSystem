import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { User } from './interface/user.interface';

@Injectable()
export class UserService {
  private users: User[] = [];
  async createUser(user: CreateUserDTO): Promise<User> {
    const newUser = { ...user, id: this.users.length + 1 };
    this.users.push(newUser);
    return newUser;
  }

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }
}
