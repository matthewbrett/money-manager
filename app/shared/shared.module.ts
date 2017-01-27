import { NgModule } from '@angular/core';
import { CurrencyFormatter} from './mm-currency-formatter.pipe';
import { CheckboxContainerComponent } from "../ui/checkbox-container.component";


@NgModule({
    declarations: [
        CurrencyFormatter,
        CheckboxContainerComponent
    ],
    exports: [
        CurrencyFormatter,
        CheckboxContainerComponent
    ]
})
export class SharedModule{}