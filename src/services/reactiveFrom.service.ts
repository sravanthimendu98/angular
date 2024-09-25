import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  // BehaviorSubject to store the form data
  private formDataSubject = new BehaviorSubject<any>(null);

  // Observable for components to subscribe to
  formData$ = this.formDataSubject.asObservable();

  setFormData(data: any) {
    console.log(data, 'data');

    this.formDataSubject.next(data);
  }

  getFormData() {
    return this.formDataSubject.value;
  }
}
