import { Controller, Get, Query } from '@nestjs/common';
import { TaxService } from './tax.service.js';
import { TaxDto } from './dto/tax.dto.js';

@Controller('tax')
export class TaxController {
  constructor(private readonly taxService: TaxService) { }
  @Get()
  calculateTax(@Query() query: TaxDto) {
    return{
      success: true,
      message: 'Tax Calculated',
      data: this.taxService.calculateTax(query)
    }
  }
}
