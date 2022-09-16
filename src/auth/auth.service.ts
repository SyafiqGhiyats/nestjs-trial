import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService
  ) {}
  async validateUser(username: string, password: string) {
    const user = await this.userService.findUserByUsername(username);
    if (user) {
      const isPasswordMatch = comparePassword(password, user.password);
      if (isPasswordMatch) {
        console.log('User validation success');
        return user;
      } else {
        console.log('password dont match');
        return null;
      }
    }
    console.log('User validation failed');
    return null;
  }
}
