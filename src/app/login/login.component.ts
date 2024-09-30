import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onLogin() {
    const validEmail = '123@gmail.com';
    const validPassword = '123';

    const { email, password } = this.loginForm.value;

    if (email === validEmail && password === validPassword) {
      const token = 'token';

      sessionStorage.setItem('token', token);
      this.router.navigate(['/userInfoDetails']);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
}
