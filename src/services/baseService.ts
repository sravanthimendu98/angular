import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urls } from '../app/urls';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private _httpClient: HttpClient, private urls: Urls) {}

  userLogin(data: any): Observable<any> {
    return this._httpClient.post(this.urls.createUserUrl, data);
  }

  getUserDetails(): Observable<any> {
    return this._httpClient.get(this.urls.userUrl);
  }
}
