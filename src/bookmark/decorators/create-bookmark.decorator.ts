import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBookmark {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: number;

  @IsString()
  @IsNotEmpty()
  link: string;
}
