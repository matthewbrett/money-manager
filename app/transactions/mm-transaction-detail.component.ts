import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionService } from './mm-transaction.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'mm-transaction-detail',
    templateUrl: './app/transactions/mm-transaction-detail.component.html'
})
export class TransactionDetail implements OnInit {
    transaction: Transaction;

    constructor(private route: ActivatedRoute, private transactionService:TransactionService) {}

    ngOnInit(){
        var id: number = +this.route.snapshot.params['id'];
        this.transactionService.getTransaction(id)
            .subscribe((transaction: Transaction) => this.transaction = transaction);
    }
}