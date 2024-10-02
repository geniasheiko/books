import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';

// export class UpdateBookDto extends PartialType(CreateBookDto) {}

export class UpdateBookDto {
    readonly title?: string;
    readonly author?: string;
    readonly publishedDate?: number;
    readonly pages?: number;
  }
  