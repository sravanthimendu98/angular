import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollToTop]',
  standalone: true,
})
export class ScrollToTopDirective {
  @Input() scrollTarget: HTMLElement | null = null;

  @HostListener('click') onClick() {
    if (this.scrollTarget) {
      this.scrollTarget.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
