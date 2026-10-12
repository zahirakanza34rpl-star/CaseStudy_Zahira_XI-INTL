import { Injectable } from '@nestjs/common';
import { BodyDto } from './dto/body.dto.js';

@Injectable()
export class ElectricService {
  calculateElectricityBill(body: BodyDto) {
    const { customerName, meter, rates } = body;

    const usageKwh = meter.currentKwh - meter.previousKwh;
    const usageFee = usageKwh * rates.perKwh;
    const subtotal = rates.baseFee + usageFee;

    const taxRate = rates.taxRate ?? 11;
    const tax = (subtotal * taxRate) / 100;
    const total = subtotal + tax;

    return {
      customerName,
      usageKwh,
      baseFee: rates.baseFee,
      usageFee,
      subtotal,
      taxRate,
      tax,
      total,
    };
  }
}