import {
  Body,
  Controller,
  Param,
  Post,
  Query,
} from '@nestjs/common';

import { LoansService } from './loans.service.js';
import { ParamsDto } from './dto/params.js';
import { QueryDto } from './dto/query.js';
import { BodyDto } from './dto/body.dto.js';

@Controller('loans')
export class LoansController {
  constructor(
    private readonly loansService: LoansService,
  ) {}

  @Post(':principal/installment')
  calculateInstallment(
    @Param() params: ParamsDto,
    @Query() query: QueryDto,
    @Body() body: BodyDto,
  ) {
    return {
      success: true,
      message: 'Installment calculated',
      data: this.loansService.calculateInstallment(
        params.principal,
        query.currency,
        body.months,
        body.annualInterestRate,
      ),
    };
  }
}