import {Component, OnInit, OnChanges, Input, SimpleChanges} from '@angular/core';
import { Transaction } from '../models/transaction';

@Component({
    selector: 'mm-transactions-list',
    templateUrl: './app/transactions/mm-transactions-list.component.html'
})
export class TransactionsList implements OnInit, OnChanges {
    total: number;
    count: number;

    @Input()
    transactions: Transaction[] = [];
    constructor() { }
    
    ngOnInit() {
        this.transactions = [];
    }

    ngOnChanges (changes: SimpleChanges) {
        if(this.transactions) {
            var total: number;

            total = this.transactions.reduce(function (data: number, transaction: Transaction) {
                return data + transaction.amount;
            }, 0);

            this.total = total;
            this.count = this.transactions.length;
        }
    }
}

