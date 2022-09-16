import { Inject } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UserEntity } from 'src/typeorm';
import { UsersService } from 'src/users/users.service';

export class SessionSerializser extends PassportSerializer {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService
  ) {
    super();
  }

  serializeUser(user: UserEntity, done: (err, user: UserEntity) => void) {
    console.log('serialize user');

    done(null, user);
  }

  async deserializeUser(
    user: UserEntity,
    done: (err, user: UserEntity) => void
  ) {
    console.log('deserialize user');

    const userDB = await this.userService.findUserById(user.id);
    console.log(userDB);

    return userDB ? done(null, userDB) : done(null, null);
  }
}
