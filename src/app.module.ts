
import { Module } from '@nestjs/common';

import { ScoresModule } from './scores/scores.module.js';
import { TaxModule } from './tax/tax.module.js';
import { ConvertModule } from './convert/convert.module.js';
import { TemperatureModule } from './temperature/temperature.module.js';
import { CheckoutModule } from './checkout/checkout.module.js';
import { LoansModule } from './loans/loans.module.js';
import { ElectricModule } from './electric/electric.module.js';
import { ParkingModule } from './parking/parking.module.js';
import { DeliveryModule } from './delivery/delivery.module.js';

@Module({
  imports: [
    ScoresModule,
    TaxModule,
    ConvertModule,
    TemperatureModule,
    CheckoutModule,
    LoansModule,
    ElectricModule,
    ParkingModule,
    DeliveryModule,
  ],
})
export class AppModule {}
