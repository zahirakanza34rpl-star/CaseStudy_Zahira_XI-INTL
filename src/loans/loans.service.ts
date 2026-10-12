import { Injectable } from '@nestjs/common';

@Injectable()
export class LoansService {
    calculateInstallment(
        principal: number,
        currency: string,
        months: number,
        annualInterestRate: number,
    ){
        const monthlyInterestRate = annualInterestRate / 12 / 100
        
        let monthlyInstallment: number

        if (monthlyInterestRate === 0){
            monthlyInstallment = principal / months
        } else {
            const r = monthlyInterestRate
            const n = months

            monthlyInstallment = 
            (principal * r * Math.pow(1 + r, n)) /
            (Math.pow(1 + r,n)- 1)     
    }

    monthlyInstallment = Math.round(monthlyInstallment)

    const totalPayment = monthlyInstallment + months
    const totalInterest = totalPayment - principal

    return {
        principal,
        currency,
        months,
        annualInterestRate,
        monthlyInterestRate: Number(monthlyInterestRate.toFixed(4)),
        monthlyInstallment,
        totalPayment,
        totalInterest,
    }
}
}