import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'csv-converter',
    templateUrl: 'csv-converter.component.html'
})

export class CsvConverter implements OnInit {
    input: string;
    output:string;
    constructor() { }

    ngOnInit() { }

    public convertCsvToJson(){
        var converted = this.csvJSON(this.input);
        this.output = converted;
    }

    //var csv is the CSV file with headers
    csvJSON(csv:string){

    var lines=csv.split("\n");

    var result:any = [];

    var headers=lines[0].split(",");

// debugger;
    for(var i=1;i<lines.length;i++){

        var obj = {};
        var currentline=lines[i].split(",");

        for(var j=0;j<headers.length;j++){
            var destinationField: any;
            if(isNaN(+currentline[j])) {
                destinationField = currentline[j];
            } else {
                destinationField = Number(currentline[j]);
            }
            obj[headers[j]] = destinationField;
        }

        result.push(obj);

    }
    
    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
    }
}