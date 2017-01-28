import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFormatter} from './mm-currency-formatter.pipe';
import { CheckboxContainerComponent } from "../ui/checkbox-container.component";


@NgModule({
    imports: [
        CommonModule
    ],
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