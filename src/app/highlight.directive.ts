import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(elem:ElementRef) {
    elem.nativeElement.style.backgroundColor="lightgreen"
    elem.nativeElement.style.border="0.5rem solid #198754"
   }
}