import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Book])], // Регистрируем репозиторий Book
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
