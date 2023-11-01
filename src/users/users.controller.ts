import { Controller, Get ,Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './user.dto'; // Import DTO

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':Userid')
  async findOne(Userid)
  {
    return await this.usersService.findOne(Userid)  ;
  }
}
