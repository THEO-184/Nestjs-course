import { Controller, Get, UseGuards } from '@nestjs/common';

import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorators';
import { User } from '@prisma/client';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
}
