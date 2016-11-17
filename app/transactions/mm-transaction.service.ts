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
    getTransactions() {
        var source = this.http
            .get('app/data/cc-platinum2014-2016.json');

        return source.map(this.mapTransactions);
    };

    private mapTransactions(response: Response) : Transaction[]{
        var i = 1;
        return response.json()
            .map(t => function(){
                var id = i;
                var transaction: Transaction = new Transaction(id, t.Date, t.Payee, t.Amount);
                i++;
                return transaction;
            }());
    }
}
