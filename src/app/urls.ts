import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class Urls {
  public sourceUrl: string = 'https://jsonplaceholder.typicode.com';
  public userUrl: string = this.sourceUrl + '/users';
}
