import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class TemperatureService {
  convertTemperature(
    value: number,
    from: string,
    to: string,
  ): number {
    if (from === to) {
      throw new BadRequestException(
        'Source and target units must be different',
      );
    }

    let celsius: number;

    if (from === 'C') {
      celsius = value;
    } else if (from === 'F') {
      celsius = (value - 32) * 5 / 9;
    } else {
      celsius = value - 273.15;
    }

       let result: number;

    if (to === 'C') {
      result = celsius;
    } else if (to === 'F') {
      result = celsius * 9 / 5 + 32;
    } else {
      result = celsius + 273.15;
    }

    return Number(result.toFixed(2));
  }
}