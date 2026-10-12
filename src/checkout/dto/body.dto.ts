import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Min,
  ValidateNested,
} from 'class-validator';

export class ItemDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  name: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  price: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  qty: number;
}

export class BodyDto {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(20)
  @ValidateNested({ each: true })
  @Type(() => ItemDto)
  items: ItemDto[];
}