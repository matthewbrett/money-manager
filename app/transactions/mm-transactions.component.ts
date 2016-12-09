import { Component, Input, OnInit } from '@angular/core';
import { TransactionService } from './mm-transaction.service';
import { Transaction } from '../models/transaction';

@Component({
    selector: 'mm-transactions',
    templateUrl: './app/transactions/mm-transactions.component.html'
})
export class Transactions implements OnInit {
    transactions: Transaction[];
    total: number;
    fromDate: string;
    toDate: string;
    constructor(private transactionService: TransactionService){}

    ngOnInit(){
        this.transactions = [];
        this.fromDate = '2016-01-01';
        this.toDate = '2016-11-11'
        this.filter();
    }

    filter(){
        var filter: (transaction: Transaction) => boolean = (transaction:Transaction) => 
            (transaction.date > new Date(this.fromDate) 
                && transaction.date < new Date(this.toDate) 
                && transaction.amount < 0);

        this.transactionService.getTransactions(filter)
            .subscribe(transactions => this.setupTransactions(transactions));
    }

    setupTransactions(transactions:Transaction[]){
        this.transactions = transactions;
        var total = 0;
        total = this.transactions.reduce(function(data:number, transaction:Transaction){
            return data + transaction.amount;
        }, 0);
        this.total = total;
    }
}