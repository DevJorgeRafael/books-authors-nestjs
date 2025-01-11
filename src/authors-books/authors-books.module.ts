import { Module } from '@nestjs/common';
import { AuthorsBooksService } from './authors-books.service';
import { AuthorsBooksController } from './authors-books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsBook } from './entities/authors-book.entity';
import { Author } from 'src/authors/entities/author.entity';
import { Book } from 'src/books/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorsBook, Author, Book])],
  controllers: [AuthorsBooksController],
  providers: [AuthorsBooksService],
})
export class AuthorsBooksModule {}
