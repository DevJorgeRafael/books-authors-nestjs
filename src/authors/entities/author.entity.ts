import { AuthorsBook } from "src/authors-books/entities/authors-book.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('authors')
export class Author {
    @PrimaryGeneratedColumn({ name: 'author_id' })
    id: number;
    
    @Column({ name: 'author_name', nullable: false })
    name: string;
    
    @Column({ name: 'author_lastname', nullable: false })
    lastname: string;
    
    @Column({ name: 'author_birthdate', nullable: false })
    birthDate: Date;

    @OneToMany(() => AuthorsBook, (authorsBooks) => authorsBooks.author)
    authorsBooks: AuthorsBook[];
}
