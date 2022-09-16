import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticatedGuard } from 'src/auth/utils/LocalGuard';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { SerializedUser } from './types';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService
  ) {}

  @UseGuards(AuthenticatedGuard)
  @Get('')
  getUsers() {
    return this.userService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':username')
  getByUsername(@Param('username') username: string): SerializedUser {
    const user = this.userService.getUserByUsername(username);
    if (user) return new SerializedUser(user);
    else throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }
}
