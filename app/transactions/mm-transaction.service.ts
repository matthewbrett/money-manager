import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

export class Transaction{
    date: Date;
    payee: string;
    amount: number;
    constructor(date: Date, payee: string, amount: number){
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
        return response.json()
            .map(t => new Transaction(t.Date, t.Payee, t.Amount));
    }
}
