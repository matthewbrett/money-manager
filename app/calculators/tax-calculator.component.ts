import { Component, OnInit } from '@angular/core';
import { TaxCalculatorService } from './tax-calculator.service';
import { TaxBand } from '../models/tax-band';
import { TaxBreakdown } from '../models/tax-breakdown';
import { TaxCalculation } from '../models/tax-calculation';

@Component({
    selector: 'tax-calculator',
    templateUrl: './app/calculators/tax-calculator.component.html'
})
export class TaxCalculator implements OnInit {
    constructor(private taxCalculatorService: TaxCalculatorService){}
    income: number;
    tax: number;;

    ngOnInit() {
        this.income = 75000;
        this.tax = 0;
        this.taxBands = this.taxCalculatorService.getTaxBands();
        this.calculateTax();
    }

    calculateTax(){
        var taxCalculations: TaxCalculation = this.taxCalculatorService.calculateTax(this.income);
        this.tax = taxCalculations.tax;
        this.taxBreakdowns = taxCalculations.taxBreakdowns;
    };
    taxBreakdowns: TaxBreakdown[];
    taxBands: TaxBand[];
}