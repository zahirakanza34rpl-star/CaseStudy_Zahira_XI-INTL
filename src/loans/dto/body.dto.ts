import { Type } from 'class-transformer'
import { IsInt, IsNotEmpty, IsNumber, Max, Min } from 'class-validator'

export class BodyDto {
    @Type (() => Number)
    @IsNotEmpty ()
    @IsInt ()
    @Min (1)
    @Max (60)
    months: number

    @Type (() => Number)
    @IsNotEmpty ()
    @IsNumber ()
    @Min (0)
    @Max (50)
    annualInterestRate: number
}