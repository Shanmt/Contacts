import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[app-highlight]' })

export class HighlightDirective{
    
    constructor(el: ElementRef){
        el.nativeElement.style.backgroundColor = 'gold';
        el.nativeElement.style.color = '#c30e2e';
        el.nativeElement.style.width = '100%';
    }
    
}