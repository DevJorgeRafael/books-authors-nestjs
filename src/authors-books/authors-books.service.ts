import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthorsBookDto } from './dto/create-authors-book.dto';
import { UpdateAuthorsBookDto } from './dto/update-authors-book.dto';
import {  Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { AuthorsBook } from './entities/authors-book.entity';
import { AuthorsService } from 'src/authors/authors.service';
import { BooksService } from 'src/books/books.service';

@Injectable()
export class AuthorsBooksService {
  constructor(
    @InjectRepository(AuthorsBook)
    private readonly authorsBookRepository: Repository<AuthorsBook>,
    private readonly authorsService: AuthorsService,
    private readonly booksService: BooksService
  ) {}

  async create(createAuthorsBookDto: CreateAuthorsBookDto) {
    const foundAuthor = await this.authorsService.findOne(createAuthorsBookDto.authorId);
    if(!foundAuthor) {
      throw new NotFoundException('Author not found');
    }

    const foundBook = await this.booksService.findOne(createAuthorsBookDto.bookId);
    if(!foundBook) {
      throw new NotFoundException('Book not found');
    }

    const newAuthorBook = this.authorsBookRepository.create({
      author: foundAuthor,
      book: foundBook
    })
    return this.authorsBookRepository.save(newAuthorBook);
  }

  async findAll() {
    return await this.authorsBookRepository.find(
      { relations: ['author', 'book'] }
    );
  }

  findOne(id: number) {
    return this.authorsBookRepository.findOne({ 
      where: { id },
      relations: ['author', 'book']
    });
  }

  async update(id: number, updateAuthorsBookDto: UpdateAuthorsBookDto) {
    const foundAuthorBook = await this.authorsBookRepository.findOne({ where: { id }});
    if(!foundAuthorBook) {
      throw new NotFoundException('Author book not found');
    }

    const foundAuthor = await this.authorsService.findOne(updateAuthorsBookDto.authorId);
    if(!foundAuthor) {
      throw new NotFoundException('Author not found');
    }

    const foundBook = await this.booksService.findOne(updateAuthorsBookDto.bookId);
    if(!foundBook) {
      throw new NotFoundException('Book not found');
    }

    const updatedAuthorBook = this.authorsBookRepository.update(id, {
      author: foundAuthor,
      book: foundBook
    });
    return updatedAuthorBook;
  }

  remove(id: number) {
    return this.authorsBookRepository.delete(id);
  }
}
