import { Component, OnInit } from '@angular/core';
import { TransactionService } from './mm-transaction.service';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../models/transaction';

@Component({
    selector: 'mm-transaction-detail',
    templateUrl: './app/transactions/mm-transaction-detail.component.html',
    styleUrls: ['./app/transactions/mm-transaction-detail.component.css']
})
export class TransactionDetail implements OnInit {
    transaction: Transaction;
    relatedTransactions: Transaction[];

    constructor(private route: ActivatedRoute, private transactionService: TransactionService) {}

    ngOnInit(){
        var id: number = +this.route.snapshot.params['id'];
        var tService = this.transactionService;
        this.transactionService.getTransaction(id)
            .subscribe((t: Transaction) => this.setupTransaction(t, tService));
    }

    private setupTransaction(trans: Transaction, tService: TransactionService){
        this.transaction = trans;
        tService.getTransactions((t: Transaction) => t.payee == trans.payee )
            .subscribe((transactions: Transaction[]) => this.relatedTransactions = transactions);
    }
}