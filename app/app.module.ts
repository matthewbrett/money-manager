import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { TaxCalculator } from './tax-calculator.component'
import { CurrencyFormatter} from './mm-currency-formatter.pipe'
import { LOCALE_ID } from '@angular/core';
import { TaxCalculatorService } from './tax-calculator.service';

import { AppRoutingModule, routableComponents } from './app-routing.module'

@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ 
    AppComponent, 
    TaxCalculator, 
    CurrencyFormatter, 
    routableComponents 
  ],
  bootstrap: [ AppComponent ],
  providers: [
    {provide: LOCALE_ID, useValue: "en-NZ"},
    TaxCalculatorService
  ]
})
export class AppModule { }
