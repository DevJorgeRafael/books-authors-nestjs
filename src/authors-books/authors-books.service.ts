import { Injectable } from '@nestjs/common';
import { CreateAuthorsBookDto } from './dto/create-authors-book.dto';
import { UpdateAuthorsBookDto } from './dto/update-authors-book.dto';

@Injectable()
export class AuthorsBooksService {
  create(createAuthorsBookDto: CreateAuthorsBookDto) {
    return 'This action adds a new authorsBook';
  }

  findAll() {
    return `This action returns all authorsBooks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} authorsBook`;
  }

  update(id: number, updateAuthorsBookDto: UpdateAuthorsBookDto) {
    return `This action updates a #${id} authorsBook`;
  }

  remove(id: number) {
    return `This action removes a #${id} authorsBook`;
  }
}
