import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';



@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  findOne(id: number): Promise<Book> {
    return this.booksRepository.findOneBy({ id });
  }

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const newBook = this.booksRepository.create(createBookDto);
    return this.booksRepository.save(newBook);
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    const book = await this.booksRepository.findOne({ where: { id } });

    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }

    Object.assign(book, updateBookDto);  
    return this.booksRepository.save(book);  
  }
  

  async remove(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }

}














