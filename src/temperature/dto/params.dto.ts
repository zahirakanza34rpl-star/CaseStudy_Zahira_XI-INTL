import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class ParamsDto {
  @Type(() => Number)
  @IsNotEmpty()
  @IsNumber()
  @Min(-273.15)
  @Max(1000)
  value: number;
}