import {Pipe, PipeTransform} from '@angular/core';
import {DecimalPipe} from '@angular/common';
import { LOCALE_ID } from '@angular/core';

@Pipe({name: 'mycurrency'})
export class CurrencyFormatter implements PipeTransform {
    transform(value: number){
        var formatted = new DecimalPipe("en-NZ").transform(value, ".2-2");
        return formatted;
    }
}