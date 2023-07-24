import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async EditUser(id: number, dto: EditUserDto) {
    const user = await this.prisma.user.update({
      where: { id },
      data: {
        ...dto,
      },
    });

    if (!user) {
      throw new NotFoundException(`no user found with id : ${id}`);
    }

    delete user.hash;
    return user;
  }
}
