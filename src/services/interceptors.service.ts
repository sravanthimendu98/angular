import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap, timeout } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  private cache = new Map<string, any>(); // Cache for GET requests

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request = req;

    // Token from session storage
    const sessionToken = sessionStorage.getItem('token');
    if (sessionToken) {
      request = req.clone({
        setHeaders: {
          access_token: sessionToken,
        },
      });
    }

    // Check if request is GET and is already in cache
    if (req.method === 'GET') {
      const cachedResponse = this.cache.get(req.url);
      if (cachedResponse) {
        return of(cachedResponse);
      }
    }

    // Intercept request and handle it
    return next.handle(request).pipe(
      // Retry failed requests up to 3 times
      retry(3),

      // Set timeout for requests (5 seconds)
      timeout(5000),

      // Log request and response
      tap((event) => {
        console.log('Request:', request);
        console.log('Response:', event);

        // Cache GET responses
        if (request.method === 'GET') {
          this.cache.set(req.url, event);
        }
      }),

      // Catch and handle errors
      catchError((error: HttpErrorResponse) => {
        if (error.error && error.error.error === 'invalid_token') {
          sessionStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }

        let errorMessage = 'Unknown error occurred';

        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Client-side error: ${error.error.message}`;
        } else {
          // Server-side error
          errorMessage = `Server-side error: ${error.status} ${error.message}`;
        }

        // Display error message in a snackbar
        this.snackBar.open(errorMessage, 'Dismiss', { duration: 3000 });

        return throwError(error);
      })
    );
  }
}
