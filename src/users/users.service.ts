import { Injectable } from '@nestjs/common';
import { plainToClass, plainToInstance } from 'class-transformer';
import { SerializedUser, User } from './types';

@Injectable()
export class UsersService {
  private users: Array<User> = [
    {
      username: 'syafiq',
      password: 'syafiq',
    },
    { username: 'igo', password: 'igo' },
    { username: 'koko', password: 'koko' },
    { username: 'ucup', password: 'ucup' },
  ];

  getUsers() {
    return this.users.map((user) => plainToInstance(SerializedUser, user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
