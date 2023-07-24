import { BadRequestException, Injectable } from '@nestjs/common';
import { use } from 'passport';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getSingleUser(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new BadRequestException(`no user found with id: ${id}`);
    }

    delete user.hash;

    return user;
  }
}
