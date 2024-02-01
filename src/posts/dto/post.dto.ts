import { IsOptional, IsString, IsArray, Length } from 'class-validator';

export class CreatePostDto {

    @IsString()
    readonly author: string;

    @IsString()
    @Length(4, 100)
    readonly title: string;

    @IsString()
    @Length(50, 700)
    readonly content: string;

    @IsOptional()
    @IsArray()
    readonly categories: string[];

}

export class UpdatePostDto {

    @IsOptional()
    @IsString()
    @Length(4, 100)
    readonly title?: string;

    @IsOptional()
    @IsString()
    @Length(50, 700)
    readonly content?: string;

    @IsOptional()
    @IsArray()
    readonly categories?: string[];

}