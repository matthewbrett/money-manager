import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'csv-converter',
    templateUrl: './app/utilities/csv-converter.component.html'
})
export class CsvConverter implements OnInit {
    input: string;
    output:string;
    constructor() { }

    ngOnInit() { }

    public convertCsvToJson(){
        var converted = this.csvJSON(this.input);
        this.output = JSON.stringify(converted);
    }

    public convertQifToJson() {
        var converted = this.qifJSON(this.input);
        var translated = this.extractAndTranslateTransactionsFromQif(converted);

        this.output = JSON.stringify(translated);
    }

    parseDate(str: string, format: string) {
        var date: any = str.replace(' ', '').split(/[^0-9]/);

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
        return date[2] + '-' + date[1] + '-' + date[0];
    }

    extractAndTranslateTransactionsFromQif(data: any) {
        var output: any[] = [];
        data.transactions.forEach((transaction: any) => {
            var newTransaction: any = {};
            newTransaction.Date = transaction.date;
            newTransaction.Amount = transaction.amount;
            newTransaction.Payee = transaction.memo;
            output.push(newTransaction);
        });
        
        return output;
    }

    qifJSON(qif: string) {
        var lines = qif.split('\n'),
            line = lines.shift(),
            type = /!Type:([^$]*)$/.exec(line.trim()),
            data: any = {},
            transactions: any = data.transactions = [],
            transaction: any = {};

        let options: any = {};

        if (!type || !type.length) {
            throw new Error('File does not appear to be a valid qif file: ' + line);
        }
        data.type = type[1];

        var division: any = {};
        debugger;
        while (line = lines.shift()) {
            line = line.trim();
            if (line === '^') {
                transactions.push(transaction);
                transaction = {};
                continue;
            }
            switch (line[0]) {
                case 'D':
                    transaction.date = this.parseDate(line.substring(1), options.dateFormat);
                    break;
                case 'T':
                    transaction.amount = parseFloat(line.substring(1).replace(',', ''));
                    break;
                case 'N':
                    transaction.number = line.substring(1);
                    break;
                case 'M':
                    transaction.memo = line.substring(1);
                    break;
                case 'A':
                    transaction.address = (transaction.address || []).concat(line.substring(1));
                    break;
                case 'P':
                    transaction.payee = line.substring(1).replace(/&amp;/g, '&');
                    break;
                case 'L':
                    var lArray = line.substring(1).split(':');
                    transaction.category = lArray[0];
                    if (lArray[1] !== undefined) {
                        transaction.subcategory = lArray[1];
                    }
                    break;
                case 'C':
                    transaction.clearedStatus = line.substring(1);
                    break;
                case 'S':
                    var sArray = line.substring(1).split(':');
                    division.category = sArray[0];
                    if (sArray[1] !== undefined) {
                        division.subcategory = sArray[1];
                    }
                    break;
                case '$':
                    division.amount = parseFloat(line.substring(1));
                    if (!(transaction.division instanceof Array)) {
                        transaction.division = [];
                    }
                    transaction.division.push(division);
                    division = {};

                    break;

                default:
                    throw new Error('Unknown Detail Code: ' + line[0]);
            }
        }

        if (Object.keys(transaction).length) {
            transactions.push(transaction);
        }

        return data;
    }

    //var csv is the CSV file with headers
    csvJSON(csv:string){
        var lines=csv.split("\n");

        var result:any = [];

        var headers=lines[0].split(",");

        for(var i=1;i<lines.length;i++){
            var obj = {};
            var currentline=lines[i].split(",");

            for(var j=0;j<headers.length;j++){
                var destinationField: any;
                if(isNaN(+currentline[j])) {
                    if ( headers[j] === "Date" ) {
                        destinationField = this.parseDate(currentline[j], "")
                    } else{
                        destinationField = currentline[j];
                    }
                } else {
                    destinationField = Number(currentline[j]);
                }
                obj[headers[j]] = destinationField;
            }

            result.push(obj);
        }
        
        return result;
    }
}