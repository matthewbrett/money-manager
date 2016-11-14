import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { TaxCalculator } from './tax-calculator.component'
import { CurrencyFormatter} from './mm-currency-formatter.pipe'
import { LOCALE_ID } from '@angular/core';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TaxCalculator, CurrencyFormatter ],
  bootstrap: [ AppComponent ],
  providers: [
    {provide: LOCALE_ID, useValue: "en-NZ"}
  ]
})
export class AppModule { }
