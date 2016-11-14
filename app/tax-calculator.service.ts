import { Injectable } from '@angular/core';
import { TaxBand } from './models/tax-band';

@Injectable()
export class TaxCalculatorService {
    getTaxBands = () =>  [
        new TaxBand(0, 14000, 0.105),
        new TaxBand(14001, 48000, 0.175),
        new TaxBand(48001, 70000, 0.30),
        new TaxBand(70001, null, 0.33)
    ];
}