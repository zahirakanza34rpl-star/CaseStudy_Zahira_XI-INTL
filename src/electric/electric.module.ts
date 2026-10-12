import { Module } from '@nestjs/common';
import { ElectricController } from './electric.controller.js';
import { ElectricService } from './electric.service.js';

@Module({
  controllers: [ElectricController],
  providers: [ElectricService],
})
export class ElectricModule {}