
import { IsIn } from 'class-validator';

export type City =
  | 'jakarta'
  | 'bandung'
  | 'surabaya'
  | 'medan'
  | 'denpasar';

export class ParamsDto {
  @IsIn(['jakarta', 'bandung', 'surabaya', 'medan', 'denpasar'])
  city: City;
}
