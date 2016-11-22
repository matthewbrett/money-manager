import { Component, Input, OnInit } from '@angular/core';
import { TransactionService } from './mm-transaction.service';
import { Transaction } from '../models/transaction';

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