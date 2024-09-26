import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urls } from '../app/urls';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private http: HttpClient, private urls: Urls) {}

  getUserDetails(): Observable<any> {
    return this.http.get(this.urls.userUrl);
  }
}
