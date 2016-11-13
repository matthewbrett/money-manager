import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { TaxCalculator } from './tax-calculator.component'

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TaxCalculator ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
