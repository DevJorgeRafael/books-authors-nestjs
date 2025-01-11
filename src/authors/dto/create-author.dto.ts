import { isDate } from "util/types";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateAuthorDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    lastname: string;

    @Type(() => Date) 
    @IsDate()
    birthDate: Date;
}
