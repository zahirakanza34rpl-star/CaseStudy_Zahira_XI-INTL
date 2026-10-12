import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class QueryDto {
  @IsNotEmpty()
  @IsString()
  @IsIn(['C', 'F', 'K'])
  from: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['C', 'F', 'K'])
  to: string;
}