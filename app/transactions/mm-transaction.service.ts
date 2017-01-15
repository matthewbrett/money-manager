import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Transaction } from '../models/transaction';
import { DateFormatPipe } from '../../node_modules/angular2-moment/date-format.pipe';
import moment = require('moment');
@Injectable()
export class TransactionService{
    constructor(
        private http: Http){}
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

        var transactions = response.json()
            .map((t: any) => function(){
                var id = i;
                var date: Date = new Date(parseDate(t.Date, ''));
                var transaction: Transaction = new Transaction(id, date, t.Payee, t.Amount);
                i++;
                return transaction;
            }());

        //console.log(transactions);
        return transactions;
    }

    // parseDate(dateString: string){
    //     var dateFormatPipe = new DateFormatPipe();
    //     var date = moment(dateString).format('DD-MM-YYYY');
    //     var d = new Date(dateString);
    //     // var dateParts:any[] = dateString.split("/");
    //     // var year = dateParts[2].length == 2
    //     //     ? '20' + dateParts[2]
    //     //     : dateParts[2];

    //     //return new Date(year , dateParts[1] - 1, dateParts[0]); // month is 0-based

    //     return date;

    // }

    parseDate(str: string, format: string) {
        var date: any = str.replace(' ', '').split(/[^0-9]/);

        var day: string;
        var month: string;
        var year: string;
        if(date[0].length === 4){
            // Assume year first and correct format
            return str;
        }

        if (date[0].length < 2) {
            date[0] = '0' + date[0];
        }
        if (date[1].length < 2) {
            date[1] = '0' + date[1];
        }
        if (date[2].length <= 2) {
            date[2] = 2000 + parseInt(date[2], 10);

            if (date[2] > new Date().getFullYear()) {
                date[2] -= 100;
            }
        }

        if (format === 'us') {
            return date[2] + '-' + date[0] + '-' + date[1];
        }

        let returnVal: string = date[2] + '-' + date[1] + '-' + date[0];
        return returnVal;
    }
}
