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
import { BaseService } from 'src/services/baseService';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  token = 'token';

  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder,
    private baseService: BaseService
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
      let payload = {
        title: validEmail,
        body: validPassword,
      };
      try {
        this.baseService.userLogin(payload).subscribe(
          (response) => {
            sessionStorage.setItem('access_token', this.token);
            this.router.navigate(['/userInfoDetails']);
          },
          (error) => {
            alert('User failed to login');
          }
        );
      } catch (error) {
        alert('An unexpected error occurred.');
      }
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
}
