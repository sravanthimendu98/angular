import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormDataService } from '../../../services/reactiveFrom.service';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from '../../can-deactivate.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form-validation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form-validation.component.html',
  styleUrl: './reactive-form-validation.component.css',
})
export class ReactiveFormValidationComponent implements CanComponentDeactivate {
  userForm: FormGroup;
  hasUnsavedChanges = true;

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.hasUnsavedChanges) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
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

  isFormSubmitted: boolean = false;

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
