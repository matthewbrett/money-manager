import { Component, Input } from '@angular/core';

@Component({
    selector: 'mm-checkbox-container',
    template: `
    <div>
        <label>{{label}}</label>
        <ng-content></ng-content>
    
    </div>
`,
    styles: ['input[type="checkbox"] { background: red; }']
})
export class CheckboxContainerComponent {
    @Input() label: string;
}