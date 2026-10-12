import {
  Body,
  Controller,
  Post,
  Query,
} from '@nestjs/common';

import { CheckoutService } from './checkout.service.js';
import { BodyDto } from './dto/body.dto.js';
import { QueryDto } from './dto/query.dto.js';

@Controller('checkout')
export class CheckoutController {
  constructor(
    private readonly checkoutService: CheckoutService,
  ) {}

  @Post('discount')
  checkout(
    @Query() query: QueryDto,
    @Body() body: BodyDto,
  ) {
    const result =
      this.checkoutService.calculateCheckout(
        body.items,
        query.member,
        query.coupon,
      );

    return {
      success: true,
      message: 'Checkout calculated',
      data: result,
    };
  }
}