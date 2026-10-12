
import { Type } from 'class-transformer';
import {
  IsNumber,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { DimensionDto } from './dimension.dto.js';

export class BodyDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0.1)
  @Max(30)
  weightKg: number;

  @Type(() => DimensionDto)
  @ValidateNested()
  dimension: DimensionDto;
}
