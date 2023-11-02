import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

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
    if(this.usersRepository.findOneBy({id}) != null){
      return await this.usersRepository.findOneBy({id});
    }
    else{
      const check_id = id;
      console.log(check_id);
    }
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}