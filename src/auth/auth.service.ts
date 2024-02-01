import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/types/User";

@Injectable()
export class AuthService {
    testUser: User;

    constructor(private jwtService: JwtService) {
        this.testUser = {
            _id: '12dc',
            userName: 'juani',
            password: 'test',
            email: 'dhfg@gmail.com',
            isAdmin: 1
        };
    }

    async validateUser(userName: string, password: string): Promise<User> {
        if (
            this.testUser.userName.toLocaleLowerCase() == userName.toLocaleLowerCase() && 
            this.testUser.password == password
        ) {
            return { 
                _id: this.testUser?._id, 
                userName: this.testUser?.userName,
                email: this.testUser?.email,
                isAdmin: this.testUser?.isAdmin,
            }
        }
        return null;
    }

    async login(user: User) {
        const payload = { 
            userName: user.userName,
            userId: user._id,
            isAdmin: user.isAdmin,
        };
        console.log(user, payload, 'en el login')
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}