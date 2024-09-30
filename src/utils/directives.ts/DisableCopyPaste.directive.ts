import { Directive, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appDisableCopyPaste]',
})
export class DisableCopyPasteDirective {
  @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
    event.preventDefault();
  }

  @HostListener('copy', ['$event']) blockCopy(event: KeyboardEvent) {
    event.preventDefault();
  }

  @HostListener('cut', ['$event']) blockCut(event: KeyboardEvent) {
    event.preventDefault();
  }
}
