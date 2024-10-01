import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from '../../utils/directives/highlight.directive';
import { DisableCopyPasteDirective } from '../../utils/directives/DisableCopyPaste.directive';
import { ScrollToTopDirective } from '../../utils/directives/ScrollToTop.directive';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    RouterModule,
    HighlightDirective,
    DisableCopyPasteDirective,
    ScrollToTopDirective,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {}
