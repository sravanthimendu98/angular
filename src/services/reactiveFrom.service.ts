import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  private formDataSubject = new BehaviorSubject<any>(null);

  setFormData(data: any) {
    this.formDataSubject.next(data);
  }

  getFormData() {
    return this.formDataSubject.value;
  }
}
