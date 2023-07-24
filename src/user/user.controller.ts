import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';

import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorators';
import { User } from '@prisma/client';
import { EditUserDto } from './dto';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch('me')
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.EditUser(userId, dto);
  }
}
