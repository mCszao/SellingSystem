import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './class/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() user: CreateUserDTO): Promise<UserEntity> {
    return await this.userService.createUser(user);
  }

  @Get()
  async getAll(): Promise<UserEntity[]> {
    return await this.userService.getAllUsers();
  }
}
