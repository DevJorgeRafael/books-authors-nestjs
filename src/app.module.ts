import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { AuthorsBooksModule } from './authors-books/authors-books.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    BooksModule,
    AuthorsModule,
    AuthorsBooksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
