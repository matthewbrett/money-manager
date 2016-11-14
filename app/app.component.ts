import { Component } from '@angular/core';

@Component({
    selector: 'mm-app',
    template: `
    <div class="container">
        <h1>Money manager</h1>
        <tax-calculator></tax-calculator>
    </div>
    `
})
export class AppComponent { }
