
import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';

function parseBoolean(value: unknown): unknown {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return value;
}

export class QueryDto {
  @IsOptional()
  @Transform(({ value }) => parseBoolean(value))
  @IsBoolean()
  express: boolean = false;

  @IsOptional()
  @Transform(({ value }) => parseBoolean(value))
  @IsBoolean()
  insurance: boolean = false;
}
