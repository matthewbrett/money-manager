import { NgModule } from '@angular/core';
import { CurrencyFormatter} from './mm-currency-formatter.pipe';


@NgModule({
    declarations: [
        CurrencyFormatter
    ],
    exports: [
        CurrencyFormatter
    ]
})
export class SharedModule{}