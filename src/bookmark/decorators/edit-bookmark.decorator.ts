import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class EditBookmark {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  link?: string;
}
