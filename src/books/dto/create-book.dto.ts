import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateBookDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    literary_genre: string;

    @Type(() => Date)
    @IsDate()
    publication_date: Date;

    @IsNotEmpty()
    @IsString()
    language: string;
}
