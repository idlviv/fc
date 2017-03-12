import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[bold]'
})
export class BoldDirective{

  constructor(private elementRef: ElementRef, private renderer: Renderer){

    this.renderer.setElementStyle(this.elementRef.nativeElement, "font-weight", "bold");
  }
}
