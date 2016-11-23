export class Transaction{
    id: number;
    date: Date;
    payee: string;
    amount: number;
    constructor(id: number, date: Date, payee: string, amount: number){
        this.id = id;
        this.date = new Date(date);
        this.payee = payee;
        this.amount = amount;
    }
}