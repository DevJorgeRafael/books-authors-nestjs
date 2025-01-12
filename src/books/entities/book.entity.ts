import { AuthorsBook } from "src/authors-books/entities/authors-book.entity";
import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from "typeorm";

@Entity('books')
export class Book {
    @PrimaryGeneratedColumn({ name: 'book_id' })
    id: number;

    @Column({ name: 'book_title' })
    title: string;

    @Column({ name: 'book_literary_genre' })
    literary_genre: string;

    @Column({ name: 'book_publication_date' })
    publication_date: Date;

    @Column({ name: 'book_language' })
    language: string;

    @OneToMany(() => AuthorsBook, (authorsBook) => authorsBook.book)
    authorsBooks: AuthorsBook[];
}
