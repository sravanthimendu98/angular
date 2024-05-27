import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form-validation.component.html',
  styleUrl: './reactive-form-validation.component.css'
})
export class ReactiveFormValidationComponent {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      city: new FormControl(""),
      state: new FormControl(""),
      zipCode: new FormControl(""),
      isAgree: new FormControl(false),
    })
  }

  isFormSubmitted: boolean = false;

  onSubmit() {
    const formValid = this.userForm.valid;
    console.log(formValid,'formvalid');
    
    this.isFormSubmitted = true;
  }


}
