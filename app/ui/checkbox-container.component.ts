import {
    Component, Input, ContentChildren, ContentChild, AfterContentInit, ElementRef, Directive,
    Renderer
} from '@angular/core';

@Directive({ selector: 'input' })
export class Checkbox {}

@Component({
    selector: 'mm-checkbox-container',
    template: `
    <span>
        <ng-content></ng-content>
        <label *ngIf="label"><span></span>Check Box 1</label>
    </span>
`})
export class CheckboxContainerComponent implements AfterContentInit{
    @Input() label: string;
    @ContentChild('cb') checkbox : any;
    constructor(private elementRef : ElementRef, private renderer: Renderer){
        //console.log(elementRef.nativeElement);
    }

    ngAfterContentInit(){
        let element : ElementRef = this.checkbox.nativeElement;
        console.log(element);
        this.renderer.setElementStyle(element, 'backgroundColor', 'yellow');
    }
}