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
    constructor(private transactionService: TransactionService){}

    ngOnInit(){
        var filter: (transaction: Transaction) => boolean = (transaction:Transaction) => (transaction.date > new Date('2016-01-01');
        this.transactions = [];
        
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