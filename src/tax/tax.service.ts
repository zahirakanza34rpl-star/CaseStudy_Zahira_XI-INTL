import { Injectable } from '@nestjs/common';
import { TaxDto } from './dto/tax.dto.js';

@Injectable()
export class TaxService {
    calculateTax(data: TaxDto) {
        const { amount, rate, inclusive = false } = data

        if (inclusive) {
            const tax = amount - amount / (1 + rate / 100)
            const net = amount - tax

            return {
                amount,
                rate,
                inclusive,
                net,
                tax,
                gross: amount
            }
        }

        const tax = amount * (rate / 100)
        const gross = amount + tax

        return {
            amount,
            rate,
            inclusive,
            net: amount,
            tax,
            gross,
        }
    }
}
