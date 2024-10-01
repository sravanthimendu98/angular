import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private _router: Router,
    private fb: FormBuilder,
    private _baseService: BaseService
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
      this._baseService.userLogin(payload).subscribe(
        (response: any) => {
          sessionStorage.setItem('access_token', this.token);
          this._router.navigate(['/userInfoDetails']);
        },
        (error: any) => {
          alert('User failed to login');
        }
      );
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
}
