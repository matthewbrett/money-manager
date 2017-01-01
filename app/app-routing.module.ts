import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaxCalculator } from './calculators/tax-calculator.component';
import { Transactions } from './transactions/mm-transactions.component';
import { TransactionDetail } from './transactions/mm-transaction-detail.component';
import { CsvConverter } from './utilities/csv-converter.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'tax-calculator' },
    { path: 'tax-calculator', component: TaxCalculator },
    { path: 'csv-converter', component: CsvConverter },
    { path: 'transactions', component: Transactions },
    { path: 'transactions/:id', component: TransactionDetail }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const routableComponents = [
    TaxCalculator,
    Transactions,
    TransactionDetail,
    CsvConverter
];

