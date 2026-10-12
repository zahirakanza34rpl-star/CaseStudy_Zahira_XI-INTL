
import {
  Body,
  Controller,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { DeliveryService } from './delivery.service.js';
import { ParamsDto } from './dto/params.dto.js';
import { QueryDto } from './dto/query.dto.js';
import { BodyDto } from './dto/body.dto.js';

@Controller('shipping')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Post(':city')
  calculateCost(
    @Param() params: ParamsDto,
    @Query() query: QueryDto,
    @Body() body: BodyDto,
  ) {
    return {
      success: true,
      message: 'Shipping cost calculated',
      data: this.deliveryService.calculateCost(
        params.city,
        query.express ?? false,
        query.insurance ?? false,
        body,
      ),
    };
  }
}
