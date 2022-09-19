import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthenticatedGuard } from './utils/AuthenticatedGuard';
import { LocalAuthGuard } from './utils/LocalGuard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  @ApiBody({
    description: 'Payload',
    examples: {
      login: {
        value: {
          username: 'username',
          password: 'password',
        },
      },
    },
  })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login() {}

  @UseGuards(AuthenticatedGuard)
  @Get('status')
  getAuthStatus(@Req() req: Request) {
    console.log(req.user);
  }
}
