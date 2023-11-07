import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}

      async create(createUserDto: CreateUserDto): Promise<User | null> {
        const newUser = await this.usersRepository.create(createUserDto);
        return await this.usersRepository.save(newUser);
      }

    async findAll() : Promise<User[]>{
        return await this.usersRepository.find();
    }

    async findbyId(id : number):  Promise<User | null> {
        return await this.usersRepository.findOneBy({id});
    }

    async deleteOne(id : number) : Promise<void>{
         await this.usersRepository.delete(id);
    }

    async findByAge(age: number): Promise<User[]> {
        return await this.usersRepository.find({ where : {age : age } });
    }

    async findBySex(sex: string): Promise<User[]> {
        return await this.usersRepository.find({ where: { sex } });
      }
}
