import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
 import { CreateBookDto } from './dto/create-book.dto';
 import { UpdateBookDto } from './dto/update-book.dto';
 import { Book } from './entities/book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(){
return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
     return this.booksService.findOne(+id);
  }

  @Post()  
  create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.create(createBookDto);
  }

    @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }

  @Put(':id')  
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto): Promise<Book> {
    return this.booksService.update(+id, updateBookDto);  
  }
  
}




