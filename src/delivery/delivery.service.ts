
import { Injectable, NotFoundException } from '@nestjs/common';
import type { City } from './dto/params.dto.js';
import { BodyDto } from './dto/body.dto.js';

@Injectable()
export class DeliveryService {
  calculateCost(
    city: City,
    express: boolean,
    insurance: boolean,
    body: BodyDto,
  ) {
    const fares: Record<City, number> = {
      jakarta: 9000,
      bandung: 12000,
      surabaya: 15000,
      medan: 18000,
      denpasar: 20000,
    };

    const baseFare = fares[city];

    if (baseFare === undefined) {
      throw new NotFoundException('Unsupported city');
    }

    const { weightKg, dimension } = body;

    const volumetricKg =
      (dimension.lengthCm *
        dimension.widthCm *
        dimension.heightCm) /
      5000;

    const chargeableKg = Math.max(weightKg, volumetricKg);

    const weightExtra =
      Math.ceil(Math.max(0, chargeableKg - 1)) * 2000;

    const baseAndWeight = baseFare + weightExtra;
    const expressFee = express ? baseAndWeight * 0.5 : 0;
    const insuranceFee = insurance ? chargeableKg * 1000 : 0;

    const total = Math.round(
      baseAndWeight + expressFee + insuranceFee,
    );

    return {
      city,
      express,
      insurance,
      weightKg,
      volumetricKg: Number(volumetricKg.toFixed(2)),
      chargeableKg: Number(chargeableKg.toFixed(2)),
      baseFare,
      expressFee,
      insuranceFee,
      total,
    };
  }
}
