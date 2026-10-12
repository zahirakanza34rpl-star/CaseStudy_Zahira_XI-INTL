import { Module } from '@nestjs/common';
import { CheckoutModule } from './checkout/checkout.module.js';
import { LoansModule } from './loans/loans.module.js';

@Module({
  imports: [
    CheckoutModule,
    LoansModule,
  ],
})
export class AppModule {}