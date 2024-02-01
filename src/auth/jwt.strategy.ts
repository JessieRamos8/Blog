import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "src/types/User";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: '$P4L4bR45Up3RS3CR3T4%',
        });
    };
    
    async validate(payload: User) {
        console.log(payload);
        return { id: payload._id, username: payload.userName, isAdmin: payload.isAdmin }
    };
};