import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@/typeorm';
import { UsersService } from '@/users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthenticatedGuard, LocalAuthGuard } from './utils/LocalGuard';
import { LocalStrategy } from './utils/LocalStrategy';
import { SessionSerializser } from './utils/SessionSerializer';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [AuthController],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    {
      provide: 'USER_SERVICE',
      useClass: UsersService,
    },
    LocalStrategy,
    LocalAuthGuard,
    AuthenticatedGuard,
    SessionSerializser,
  ],
})
export class AuthModule {}
