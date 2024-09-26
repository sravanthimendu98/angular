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
  constructor(private router: Router) {}

  token = 'TOKEN';
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request = req;

    const sessionToken = sessionStorage.getItem('token');
    console.log(sessionToken, 'sessionToekn');

    if (sessionToken) {
      request = req.clone({
        setHeaders: {
          access_token: sessionToken,
        },
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error && error.error.error === 'invalid_token') {
          sessionStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
        return throwError(error);
      })
    );
  }
}
