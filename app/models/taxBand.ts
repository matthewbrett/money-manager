export class TaxBand {
    start: number = 0;
    end: number = 0;
    rate: number = 0;
    constructor(start: number, end: number, rate: number) {
        this.start = start;
        this.end = end;
        this.rate = rate;
    }
}