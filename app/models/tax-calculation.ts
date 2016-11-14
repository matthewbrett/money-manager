import { TaxBreakdown } from './tax-breakdown'

export class TaxCalculation {
    tax: number;
    taxBreakdowns: TaxBreakdown[];
    constructor(
        tax: number,
        taxBreakdowns: TaxBreakdown[]
    ){
        this.tax = tax;
        this.taxBreakdowns = taxBreakdowns;
    }
}