import { NgModule } from '@angular/core';
import { TransactionService } from './mm-transaction.service';
import { TransactionsList } from './mm-transactions-list.component';
@NgModule({
    declarations: [
        TransactionService,
        TransactionsList

    ],
    imports: []
})
export class TransactionModule{

}