import { Length, IsString, IsInt, Max, Min, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {

    @IsString()
    readonly userName: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    @Length(8, 20)
    readonly password: string;

    @IsInt()
    @Min(0)
    @Max(1)
    readonly isAdmin: number;
}

export class UpdateUserDto {

    @IsOptional()
    @IsString()
    readonly userName?: string;
    
    @IsOptional()
    @IsEmail()
    readonly email?: string;

    @IsOptional()
    @IsString()
    @Length(8, 20)
    readonly password?: string;

    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(1)
    readonly isAdmin?: number;
}