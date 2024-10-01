import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  CanActivateChild,
  Resolve,
  Route,
  RouterStateSnapshot,
  CanMatch,
  UrlSegment,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from './baseService';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ActivateGuardService
  implements
    CanActivate,
    CanActivateChild,
    CanDeactivate<CanComponentDeactivate>,
    CanMatch,
    Resolve<any>
{
  token = 'TOKEN';

  constructor(private baseService: BaseService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAuthenticated();
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAuthenticated();
  }

  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAuthenticated();
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.baseService.getUserDetails().pipe(
      map((userDetails) => {
        if (userDetails) {
          return { user: userDetails, message: 'Data stored!' };
        } else {
          throw new Error('User not active or not found');
        }
      }),
      catchError((error) => {
        return of({ user: null, message: 'Error resolving data' });
      })
    );
  }

  private isAuthenticated(): boolean {
    const isAuthenticated = !!localStorage.getItem('access_token');
    if (!isAuthenticated) {
      localStorage.setItem('access_token', this.token);
    }
    return isAuthenticated;
  }
}
