import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <h1>Money manager</h1>
        <tax-calculator></tax-calculator>
    `
})
export class AppComponent { }
