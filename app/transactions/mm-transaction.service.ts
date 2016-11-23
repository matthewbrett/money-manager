import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Transaction } from '../models/transaction';

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
        var parseDate = TransactionService.prototype.parseDate;
        return response.json()
            .map((t: any) => function(){
                var id = i;
                var date: Date = parseDate(t.Date);
                var transaction: Transaction = new Transaction(id, date, t.Payee, t.Amount);
                i++;
                return transaction;
            }());
    }

    parseDate(dateString: string){
        var dateParts:any[] = dateString.split("/");
        var year = dateParts[2].length == 2
            ? '20' + dateParts[2]
            : dateParts[2];

        return new Date(year , dateParts[1] - 1, dateParts[0]); // month is 0-based
    }
}
