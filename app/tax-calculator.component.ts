import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CurrencyFormatter} from './mm-currency-formatter.pipe'

class TaxBand {
    start: number = 0;
    end: number = 0;
    rate: number = 0;
    constructor(start: number, end: number, rate: number) {
        this.start = start;
        this.end = end;
        this.rate = rate;
    }
}

class TaxBreakdown{
    constructor(band: TaxBand, payable: number){
        this.taxBand = band;
        this.taxPayable = payable;
    }
    taxBand: TaxBand;
    taxPayable: number;
}

@Component({
    selector: 'tax-calculator',
    templateUrl: './app/tax-calculator.component.html'
})
export class TaxCalculator implements OnChanges {
    constructor(){
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
    taxBands = [
        new TaxBand(0, 14000, 0.105),
        new TaxBand(14001, 48000, 0.175),
        new TaxBand(48001, 70000, 0.30),
        new TaxBand(70001, null, 0.33)
    ];
     ngOnChanges(changes: SimpleChanges) {
      console.log(changes);
  }
}

