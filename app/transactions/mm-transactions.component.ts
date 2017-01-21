import { Component, Input, OnInit } from '@angular/core';
import { TransactionService } from './mm-transaction.service';
import { Transaction } from '../models/transaction';
import * as moment from 'moment';

@Component({
    selector: 'mm-transactions',
    templateUrl: './app/transactions/mm-transactions.component.html'
})
export class Transactions implements OnInit {
    transactions: Transaction[];
    total: number;
    count: number;
    fromDate: string;
    toDate: string;
    constructor(private transactionService: TransactionService){}

    ngOnInit(){
        let now: Date = new Date();
        this.transactions = [];
        this.fromDate = moment(now).subtract(30,"days").format('YYYY-MM-DD');
        this.toDate = moment(now).format('YYYY-MM-DD');
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
        this.transactions = transactions
            .sort((t1, t2) => +t2.date - +t1.date);
    }
}