import { Type } from 'class-transformer';
import {
  IsNumber,
  Min,
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({
  name: 'currentKwhGreaterThanPrevious',
  async: false,
})
class CurrentKwhValidator implements ValidatorConstraintInterface {
  validate(value: number, args: ValidationArguments) {
    const meter = args.object as MeterDto;

    return (
      typeof value === 'number' &&
      typeof meter.previousKwh === 'number' &&
      value > meter.previousKwh
    );
  }

  defaultMessage() {
    return 'currentKwh must be greater than previousKwh';
  }
}

export class MeterDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  previousKwh: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Validate(CurrentKwhValidator)
  currentKwh: number;
}