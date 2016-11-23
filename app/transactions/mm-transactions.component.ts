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
        var filter: (transaction: Transaction) => boolean = (transaction:Transaction) => (transaction.date > new Date('2016-01-01');
        this.transactions = [];
        
        this.transactionService.getTransactions(filter)
            .subscribe(transactions => this.setTransactions(this.transactions = transactions));
    }
}