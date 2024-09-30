import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HighlightDirective } from '../../../utils/directives.ts/highlight.directive';
import { AutoFocusDirective } from '../../../utils/directives.ts/AutoFocus.directive';

@Component({
  selector: 'app-template-form-validation',
  standalone: true,
  imports: [FormsModule, CommonModule, HighlightDirective, AutoFocusDirective],
  templateUrl: './template-form-validation.component.html',
  styleUrl: './template-form-validation.component.css',
})
export class TemplateFormValidationComponent {
  @ViewChild('userForm') public createTemplateForm!: NgForm;

  userObj: any = {
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    state: '',
    zipCode: '',
    isAgree: false,
  };

  isFormSubmitted: boolean = false;

  onSubmit(form: NgForm) {
    this.isFormSubmitted = true;
    const isFormValid = form.valid;
  }
}
