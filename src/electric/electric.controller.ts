import { Body, Controller, Post } from '@nestjs/common';
import { ElectricService } from './electric.service.js';
import { BodyDto } from './dto/body.dto.js';

@Controller('bills')
export class ElectricController {
  constructor(
    private readonly electricService: ElectricService,
  ) {}

  @Post('electricity')
  calculateElectricityBill(@Body() body: BodyDto) {
    return {
      success: true,
      message: 'Electricity bill calculated',
      data: this.electricService.calculateElectricityBill(body),
    };
  }
}