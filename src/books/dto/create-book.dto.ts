import { IsNotEmpty, IsString, IsNumber, Min, Max } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1500)  
  @Max(new Date().getFullYear())  
  publishedDate: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)  
  pages: number;
}

