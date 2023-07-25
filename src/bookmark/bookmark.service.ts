import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookmark, EditBookmark } from './decorators';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  async getBookmarks(userId: number) {}

  async getBookmarkById(userId: number, bookmarkId: number) {}

  async createBookmark(userId: number, dto: CreateBookmark) {}

  async editBookmarkById(
    userId: number,
    bookmarkId: number,
    dto: EditBookmark,
  ) {}

  async deleteBookmarkById(userId: number, bookmarkId: number) {}
}
