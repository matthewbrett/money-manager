import { Component } from '@angular/core';
import { TaxCalculatorService } from './tax-calculator.service';
import { TaxBand } from './models/tax-band';
import { TaxBreakdown } from './models/tax-breakdown';

@Component({
    selector: 'tax-calculator',
    templateUrl: './app/tax-calculator.component.html'
})
export class TaxCalculator {
    constructor(private taxCalculatorService: TaxCalculatorService){
        this.taxBands = taxCalculatorService.getTaxBands();
        this.calculateTax();
    }

    income: number = 80000;
    tax: number = 0;
    calculateTax(){
        var runningTax = 0;
        var breakdowns = new Array<TaxBreakdown>();
        var inc = this.income;
        for(var i = 0; i < this.taxBands.length; i++){
            var taxBand = this.taxBands[i];
            
            var taxToPay = 0;
            if(taxBand.end != null && inc > taxBand.end){
                taxToPay += (taxBand.end - taxBand.start) * taxBand.rate;
            } else {
                taxToPay += inc > taxBand.start
                    ? (inc - taxBand.start) * taxBand.rate 
                    : 0;
            }
            breakdowns.push(new TaxBreakdown(taxBand, taxToPay));

            runningTax += taxToPay;
        }
        this.tax = runningTax;
        this.taxBreakdowns = breakdowns;
    };
    taxBreakdowns: TaxBreakdown[];
    taxBands: TaxBand[];
}