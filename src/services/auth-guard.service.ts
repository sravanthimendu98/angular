import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  token = 'TOKEN';

  constructor() {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthenticated = this.checkIfAuthenticated();

    if (!isAuthenticated) {
      localStorage?.setItem('token', this.token);
      return false;
    }

    return true;
  }

  checkIfAuthenticated(): any {
    return localStorage?.getItem('token');
  }
}
