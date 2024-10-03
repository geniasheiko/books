import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsOptional, IsString, IsNumber, Min, Max } from 'class-validator';

export class UpdateBookDto {
  @IsOptional()  
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsNumber()
  @Min(1500)
  @Max(new Date().getFullYear())
  publishedDate?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  pages?: number;
}

