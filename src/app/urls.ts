import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class Urls {
  public userUrl: string = environment.BaseUrl + '/users';
}
