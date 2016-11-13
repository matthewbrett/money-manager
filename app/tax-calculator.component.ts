import { Component, OnChanges, SimpleChanges } from '@angular/core';

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

@Component({
    selector: 'tax-calculator',
    templateUrl: './app/tax-calculator.component.html'
})
export class TaxCalculator implements OnChanges {
    income: number = 0;
    tax: number = 0;
    calculateTax(){
        var runningTax = 0;
        var inc = this.income;
        for(var i = 0; i < this.taxBands.length; i++){
            var taxBand = this.taxBands[i];

            if(taxBand.end != null && inc > taxBand.end){
                runningTax += (taxBand.end -taxBand.start) * taxBand.rate;
            } else {
                runningTax += (inc - taxBand.start) * taxBand.rate;
                break;
            }
        }
        this.tax = runningTax;
    };
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

