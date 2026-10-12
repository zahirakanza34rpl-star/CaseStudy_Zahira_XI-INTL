import { Type } from 'class-transformer'
import { IsInt, IsNotEmpty, Max, Min } from 'class-validator'

export class ParamsDto{
    @Type (() => Number)
    @IsNotEmpty ()
    @IsInt ()
    @Min(1000000)
    @Max(1000000000)
    principal: number
}