import { Injectable } from '@nestjs/common';
import { User } from './schemas/users.schema';
import { Model  } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ) {}

  async getUsers(): Promise<User[]> {
    return this.userModel.find().lean();
  }

  async getUserById(id: string): Promise<User> {
    return this.userModel.findById({ _id: id }).lean();
  }

  async addUser(createUserDto: CreateUserDto): Promise<User>{
    const createUser = new this.userModel(createUserDto);
    return createUser.save();
  }

  async updateUserInfo(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userModel.updateOne({ _id: id}, updateUserDto).lean();
  }

  async deleteUser(id: string): Promise<User> {
    return this.userModel.deleteOne({ _id: id }).lean();
  }

};