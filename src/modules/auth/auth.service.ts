import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
    constructor(private usersService: UserService,private jwtService: JwtService) {}

    async signIn(name: string, userEmail: string){
        const user = await this.usersService.findOne(name);
        if (user?.email !== userEmail) {
          throw new UnauthorizedException();
        }
        const payload = {id : user.id , name : user.name}
        
        console.log(payload);

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
      }
    

}
