import { Injectable } from '@angular/core';
import { TaxBand } from '../models/tax-band';
import { TaxBreakdown } from '../models/tax-breakdown';
import { TaxCalculation } from '../models/tax-calculation';

@Injectable()
export class TaxCalculatorService {
    getTaxBands = () =>  [
        new TaxBand(0, 14000, 0.105),
        new TaxBand(14001, 48000, 0.175),
        new TaxBand(48001, 70000, 0.30),
        new TaxBand(70001, null, 0.33)
    ];

     calculateTax = (income: number) => {
         var taxBands = this.getTaxBands();
        var runningTax = 0;
        var breakdowns = new Array<TaxBreakdown>();
        var inc = income;
        for(var i = 0; i < taxBands.length; i++){
            var taxBand = taxBands[i];
            
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

        return new TaxCalculation(
            runningTax,
            breakdowns);
    };
}