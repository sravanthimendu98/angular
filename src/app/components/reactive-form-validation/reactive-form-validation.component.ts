import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  LowerCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormDataService } from '../../../services/reactiveFrom.service';
import { Router } from '@angular/router';
import { CustomPipePipe } from '../../../utils/custom-pipe.pipe';
import { CanComponentDeactivate } from '../../../services/canDeactivateGuard.service';
import { HighlightDirective } from '../../../utils/highlight.directive';

@Component({
  selector: 'app-reactive-form-validation',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CustomPipePipe,
    LowerCasePipe,
    HighlightDirective,
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
    private formDataService: FormDataService,
    private router: Router
  ) {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      city: new FormControl(''),
      state: new FormControl(''),
      zipCode: new FormControl(''),
      isAgree: new FormControl(false),
    });
  }

  onSubmit() {
    const formValid = this.userForm.valid;
    this.isFormSubmitted = true;
    const validForm = this.userForm.value;
    this.formDataService.setFormData(validForm);
    if (formValid) {
      this.router.navigate(['/getFormData']);
    }
  }
}
