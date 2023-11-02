import { Controller, Get ,Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import { async } from 'rxjs';
import { create } from 'domain';

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

  
  @Put(':userId')
  async update(@Param('userId') userId: string, @Body() updateUserDto: CreateUserDto): Promise<User | null> {
    return await this.usersService.update(Number(userId), updateUserDto);
  }
}
