import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

export class Transaction{
    id: number;
    date: Date;
    payee: string;
    amount: number;
    constructor(id: number, date: Date, payee: string, amount: number){
        this.id = id;
        this.date = date;
        this.payee = payee;
        this.amount = amount;
    }
}

@Injectable()
export class TransactionService{
    constructor(private http: Http){}
    getTransactions(filter: (transaction: Transaction) => boolean) {
        var source = this.http
            .get('http://localhost:3004/transactions');

        var mapped  = source
            .map(this.mapTransactions);
        var filtered = mapped
            .map(transactions => transactions
                .filter(filter ? filter : t => true));

        return filtered; 
    };

    getTransaction(id: number) {
        var transactions = this.getTransactions(null);

        var transaction = transactions
            .map(
                ts => ts.find(t => t.id === id)
            );

        return transaction;
    }

    private mapTransactions(response: Response) : Transaction[]{
        var i = 1;
        return response.json()
            .map((t: any) => function(){
                var id = i;
                var transaction: Transaction = new Transaction(id, t.Date, t.Payee, t.Amount);
                i++;
                return transaction;
            }());
    }
}
