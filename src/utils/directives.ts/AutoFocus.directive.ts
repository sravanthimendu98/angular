import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appAutoFocus]',
})
export class AutoFocusDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
