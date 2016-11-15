import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaxCalculator } from './tax-calculator.component';
import { Transactions } from './transactions/mm-transactions.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'tax-calculator' },
    { path: 'tax-calculator', component: TaxCalculator },
    { path: 'transactions', component: Transactions },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const routableComponents = [
    TaxCalculator,
    Transactions
];

