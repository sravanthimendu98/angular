import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  private _formDataSubject = new BehaviorSubject<any>(null);

  setFormData(data: any) {
    this._formDataSubject.next(data);
  }

  getFormData() {
    return this._formDataSubject.value;
  }
}
