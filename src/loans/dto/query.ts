import { IsIn, IsOptional } from 'class-validator'

export class QueryDto {
    @IsOptional ()
    @IsIn(['IDR','USD'])
    currency: string = 'IDR'
}