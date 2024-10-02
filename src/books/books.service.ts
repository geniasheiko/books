import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

// export type BooksType = {
//     id: number,
//     title: string,
//     author: string,
//     publishedDate: number,
//     pages: number
// }

// const AllBooks = [{
//     id: 1,
//     title: 'September',
//     author: 'Rozamund Pilcher',
//     publishedDate: 1992,
//     pages: 100
// },
// {
//     id: 2,
//     title: 'Brodie Castle',
//     author: 'Archibald Cronin',
//     publishedDate: 1931,
//     pages: 150
// },
// {
//     id: 3,
//     title: 'Anna Karenina',
//     author: 'Tolstoy Lev',
//     publishedDate: 1873,
//     pages: 300
// }];

// @Injectable()
// export class BooksService {
//     findAll(): Array<BooksType> {
//         return AllBooks;
//     }

//     findOne(id: number) {
//         return AllBooks.find(book => book.id === id) || `Book with id #${id} not exist`;
//     }
// }

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
    await this.booksRepository.update(id, updateBookDto);
    return this.booksRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }

}














// @Injectable()
// export class BooksService {
//   create(createBookDto: CreateBookDto) {
//     return 'This action adds a new book';
//   }

//   findAll() {
//     return `This action returns all books`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} book`;
//   }

//   update(id: number, updateBookDto: UpdateBookDto) {
//     return `This action updates a #${id} book`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} book`;
//   }
// }