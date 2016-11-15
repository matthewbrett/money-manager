import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

export class Transaction{
    date: Date;
    payee: string;
    amount: number;
}

@Injectable()
export class TransactionService{
    constructor(private http: Http){}
    getTransactions() {
        return this.http
            .get('app/data/cc-platinum2014-2016.json')
            .map((response: Response) => <Transaction[]>response.json());
    }
}
