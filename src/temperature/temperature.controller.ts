import {
  Controller,
  Get,
  Param,
  Query,
} from '@nestjs/common';

import { TemperatureService } from './temperature.service.js';
import { ParamsDto } from './dto/params.dto.js';
import { QueryDto } from './dto/query.dto.js';

@Controller('convert')
export class TemperatureController {
  constructor(
    private readonly TemperatureService: TemperatureService,
  ) {}

  @Get('temperature/:value')
  convertTemperature(
    @Param() params: ParamsDto,
    @Query() query: QueryDto,
  ) {
    const result = this.TemperatureService.convertTemperature(
      params.value,
      query.from,
      query.to,
    );

    return {
      success: true,
      message: 'Temperature converted',
      data: {
        value: params.value,
        from: query.from,
        to: query.to,
        result,
      },
    };
  }
}