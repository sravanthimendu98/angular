import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private _router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request = req;

    const accessToken = sessionStorage.getItem('access_token');

    if (accessToken) {
      request = request.clone({
        setHeaders: {
          access_token: accessToken,
        },
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error && error.error.error === 'invalid_token') {
          this._router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}
