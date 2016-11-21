import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionService } from './mm-transaction.service';

@Component({
    selector: 'mm-transactions',
    templateUrl: './app/transactions/mm-transactions.component.html'
})
export class Transactions implements OnInit {
    transactions: Transaction[];
    constructor(private transactionService: TransactionService){}

    ngOnInit(){
        var filter: (transaction: Transaction) => boolean = (transaction:Transaction) => transaction.amount > 0;
        this.transactions = [];
        this.transactionService.getTransactions(null)
            .subscribe(transactions => this.transactions = transactions);
    }
}