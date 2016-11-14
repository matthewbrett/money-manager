import { TaxBand } from './tax-band';

export class TaxBreakdown{
    constructor(band: TaxBand, payable: number){
        this.taxBand = band;
        this.taxPayable = payable;
    }
    taxBand: TaxBand;
    taxPayable: number;
}