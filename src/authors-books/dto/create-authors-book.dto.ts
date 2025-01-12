import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateAuthorsBookDto {
    @IsNotEmpty()
    @IsNumber()
    authorId: number;

    @IsNotEmpty()
    @IsNumber()
    bookId: number;
}
