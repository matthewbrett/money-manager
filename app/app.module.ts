import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';
import './rxjs-extensions';
import { AppComponent }  from './app.component';
import { TaxCalculator } from './calculators/tax-calculator.component'
import { LOCALE_ID } from '@angular/core';
import { TaxCalculatorService } from './calculators/tax-calculator.service';
import { TransactionService } from './transactions/mm-transaction.service';
import { TransactionsList } from './transactions/mm-transactions-list.component';
import { AppRoutingModule, routableComponents } from './app-routing.module'

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent, 
    TaxCalculator, 
    TransactionsList,
    routableComponents
  ],
  bootstrap: [ AppComponent ],
  providers: [
    {provide: LOCALE_ID, useValue: "en-NZ"},
    TaxCalculatorService,
    TransactionService
  ]
})
export class AppModule { }
