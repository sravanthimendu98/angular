import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FormDataService } from '../../services/reactiveForm.service';

@Component({
  selector: 'app-reactive-form-data',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './reactive-form-data.component.html',
  styleUrl: './reactive-form-data.component.css',
})
export class ReactiveFormDataComponent implements OnInit {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'city',
    'state',
    'zipCode',
  ];
  dataSource: any = [];

  constructor(private formDataService: FormDataService) {}

  ngOnInit() {
    const formData = this.formDataService.getFormData();
    if (formData) {
      this.dataSource = [formData];
    }
  }
}
