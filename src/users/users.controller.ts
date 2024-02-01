import { 
  Body, 
  Controller,
  Delete, 
  Get, 
  Param, 
  Post, 
  Put 
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from './schemas/users.schema';


@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('')
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Post('')
  addUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.addUser(createUserDto);
  }

  // for modify user info, just the own information, or more if you are an admin.
  @Put(':id')
  putUserInfo(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    ): Promise<User> {
    return this.userService.updateUserInfo(id, updateUserDto);
  }

  // just for admins
  @Delete(':id')
  deleteUser(@Param('id') id: string): Promise<User> {                           
    return this.userService.deleteUser(id);
  }

}
