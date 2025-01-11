import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { DeepPartial, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>
  ) { }

  create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const newAuthor = plainToInstance(Author, createAuthorDto);
    return this.authorRepository.save(newAuthor);
  }

  findAll() {
    return this.authorRepository.find();
  }

  findOne(id: number) {
    return this.authorRepository.findOne({ where: { id } });
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    const updatedAuthor = plainToInstance(Author, updateAuthorDto);
    return this.authorRepository.update(id, updatedAuthor);
  }

  remove(id: number) {
    return this.authorRepository.delete(id);
  }
}
