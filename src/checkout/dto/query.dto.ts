import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsIn,
  IsOptional,
} from 'class-validator';

export class QueryDto {
  @IsOptional()
  @Transform(({ value }) => value === 'true')
  @IsBoolean()
  member: boolean = false;

  @IsOptional()
  @IsIn(['HEMAT10', 'HEMAT20', 'FREESHIP'])
  coupon?: string;
}