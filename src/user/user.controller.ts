import { Body, Controller, Delete, Get, Post,Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';


@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService){};

    @Get()
    async findAll(){
        return await this.userService.findAll();
    }

    @Get(":Userid")
    async findbyId(@Param("Userid") Userid : number)
    {
        return this.userService.findbyId(Userid);
     }

    @Get(":UserAge")
    async findbyAge(@Param("UserAge") UserAge : number)
    {
        return await this.userService.findByAge(UserAge);

    } 

    @Post()
    async createUser(@Body() createUserDto : CreateUserDto ) {
        return await this.userService.create(createUserDto);
    }

    @Delete(":UserId")
    async deleteOne(@Param("UserId") UserId : number)
    {
        await this.userService.deleteOne(UserId);
    }

    
}
