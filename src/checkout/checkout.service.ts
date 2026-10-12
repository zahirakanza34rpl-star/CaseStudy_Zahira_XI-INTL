import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class CheckoutService {
  calculateCheckout(
    items: {
      name: string;
      price: number;
      qty: number;
    }[],
    member: boolean,
    coupon?: string,
  ) {
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.qty,
      0,
    );

    let memberDiscount = 0;
    let couponDiscount = 0;

    if (member) {
      memberDiscount = subtotal * 0.05;
    }

    if (coupon === 'HEMAT10') {
      couponDiscount = subtotal * 0.1;
    } else if (coupon === 'HEMAT20') {
      couponDiscount = subtotal * 0.2;
    } else if (coupon === 'FREESHIP') {
      couponDiscount = 0;
    } else if (coupon) {
      throw new NotFoundException('Coupon not found');
    }

    const totalDiscount = memberDiscount + couponDiscount;
    const grandTotal = subtotal - totalDiscount;

    return {
      subtotal,
      member,
      coupon: coupon ?? null,
      discounts: {
        member: memberDiscount,
        coupon: couponDiscount,
        total: totalDiscount,
      },
      grandTotal,
    };
  }
}