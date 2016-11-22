import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../models/transaction';

@Component({
    selector: 'mm-transactions-list',
    templateUrl: './app/transactions/mm-transactions-list.component.html'
})
export class TransactionsList implements OnInit {
    constructor() { }

    @Input()
    transactions: Transaction[];
    
    ngOnInit() {
        this.transactions = [];
    }
}

