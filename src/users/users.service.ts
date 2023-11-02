import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<User | null> {
    return await this.usersRepository.findOneBy({id});
  }
  async create(createUserDto: CreateUserDto): Promise<User | null> {
    const newUser = await this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(newUser);
  }

  async remove(id: number): Promise<void> {
     await this.usersRepository.delete(id);
  }

  
async update(id: number, updateUserDto: CreateUserDto): Promise<User | null> {
  const updatedUser = await this.usersRepository.preload({
    id: id,
    ...updateUserDto,
  });
  
  if (!updatedUser) {
    return null; // Trả về null nếu không tìm thấy người dùng
  }

  return await this.usersRepository.save(updatedUser);
}
}

