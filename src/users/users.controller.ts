import { Controller, Get ,Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':Userid')
  async findOne(@Param('Userid') Userid : number)
  {
    return await this.usersService.findOne(Userid);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Delete(':userId')
  async remove(@Param('userId') userId: number) {
    await this.usersService.remove(userId);
  }
}
