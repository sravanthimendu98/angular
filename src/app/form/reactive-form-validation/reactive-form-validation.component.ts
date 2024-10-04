import { CommonModule, LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormDataService } from '../../../services/reactiveForm.service';
import { Router } from '@angular/router';
import { CustomPipePipe } from '../../../utils/customDate.pipe';
import { HighlightDirective } from '../../../utils/directives/highlight.directive';
import { AutoFocusDirective } from '../../../utils/directives/AutoFocus.directive';
import { CanComponentDeactivate } from 'src/services/activateGuard.service';
import {
  capitalizedFirstLetterValidator,
  customEmailValidator,
  noNumbersValidator,
  zipCodeValidator,
} from 'src/utils/customFormValidations';

@Component({
  selector: 'app-reactive-form-validation',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CustomPipePipe,
    LowerCasePipe,
    HighlightDirective,
    AutoFocusDirective,
  ],
  templateUrl: './reactive-form-validation.component.html',
  styleUrl: './reactive-form-validation.component.css',
})
export class ReactiveFormValidationComponent implements CanComponentDeactivate {
  userForm: FormGroup;
  public formName = 'Reactive form validation';
  isFormSubmitted: boolean = false;

  canDeactivate(): boolean {
    return confirm(
      'Do you want to leave the page? Unsaved changes may be lost.'
    );
  }

  constructor(
    private _formDataService: FormDataService,
    private _router: Router
  ) {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        noNumbersValidator,
        capitalizedFirstLetterValidator,
      ]),
      lastName: new FormControl('', [
        Validators.required,
        noNumbersValidator,
        capitalizedFirstLetterValidator,
      ]),
      email: new FormControl('', [Validators.required, customEmailValidator()]),
      city: new FormControl('', [Validators.required, noNumbersValidator]),
      state: new FormControl('', [Validators.required, noNumbersValidator]),
      zipCode: new FormControl('', [Validators.required, zipCodeValidator]),
      isAgree: new FormControl(false, Validators.requiredTrue),
    });
  }

  onSubmit() {
    this.isFormSubmitted = true;
    if (this.userForm.valid) {
      const validForm = this.userForm.value;
      this._formDataService.setFormData(validForm);
      this._router.navigate(['/getFormData']);
    }
  }
}
