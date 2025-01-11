import { Author } from "src/authors/entities/author.entity";
import { Book } from "src/books/entities/book.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('authors_books')
export class AuthorsBook {
    @PrimaryGeneratedColumn({ name: 'author_book_id' })
    id: number;

    @ManyToOne(() => Author, (author) => author.authorsBooks, { onDelete: 'CASCADE' })
    author: Author;

    @ManyToOne(() => Book, (book) => book.authorsBooks, { onDelete: 'CASCADE' })
    book: Book;
}
