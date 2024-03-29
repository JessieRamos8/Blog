import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {

    @Prop({ type: String, required: true, lowercase: true, unique: true })
    userName: string;

    @Prop({ type: String, required: true })
    password: string;

    @Prop({ type: String, required: true, lowercase: true, unique: true })
    email: string;

    @Prop({ type: Number, required: true })
    isAdmin: number;

};

export const UserSchema = SchemaFactory.createForClass(User);