import { Type, Transform } from 'class-transformer';
import {
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';
import { MeterDto } from './meter.dto.js';
import { RatesDto } from './rates.dto.js';

export class BodyDto {
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim() : value,
  )
  @IsString()
  @Length(3, 80)
  customerName: string;

  @Type(() => MeterDto)
  @ValidateNested()
  meter: MeterDto;

  @Type(() => RatesDto)
  @ValidateNested()
  rates: RatesDto;
}