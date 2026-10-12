import { Type, Transform } from 'class-transformer'
import { isBoolean, IsBoolean, IsNumber, IsOptional, Max, Min } from 'class-validator'

export class TaxDto {
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    amount: number

    @Type(() => Number)
    @IsNumber()
    @Min(0)
    @Max(100)
    rate: number

    @IsOptional()
    @IsBoolean()
    inclusive?: boolean 
}

