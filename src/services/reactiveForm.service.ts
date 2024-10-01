import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  private _formDataSubject = new BehaviorSubject<any>(null);

  setFormData(data: any): void {
    this._formDataSubject.next(data);
  }

  getFormData(): any {
    return this._formDataSubject.value;
  }
}
