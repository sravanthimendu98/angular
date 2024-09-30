import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { BaseService } from '../../services/baseService';
import { CustomPipePipe } from '../../utils/customDate.pipe';
import { DisableCopyPasteDirective } from '../../utils/directives.ts/DisableCopyPaste.directive';
import { ScrollToTopDirective } from '../../utils/directives.ts/ScrollToTop.directive';

export interface User {
  id: number;
  name: string;
  email: string;
  date: Date;
  address: {
    city: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    CustomPipePipe,
    DisableCopyPasteDirective,
    ScrollToTopDirective,
  ],
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.css',
})
export class DepartmentDetailsComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'email',
    'date',
    'city',
    'phone',
    'website',
    'company',
  ];
  dataSource: User[] = [];

  constructor(private baseService: BaseService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.baseService.getUserDetails().subscribe((data: User[]) => {
      this.dataSource = data.map((user) => ({
        ...user,
        date: new Date(),
      }));
    });
  }
}
