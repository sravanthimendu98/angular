import { Component } from '@angular/core';
import { ToDoAppComponent } from '../to-do-app/to-do-app.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-components',
  standalone: true,
  templateUrl: './add-components.component.html',
  styleUrl: './add-components.component.css',
  imports: [ToDoAppComponent, ToDoListComponent, CommonModule],
})
export class AddComponentsComponent {
  constructor(private router: Router) {}

  departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Vue' },
    { id: 4, name: 'Mongo db' },
    { id: 5, name: 'Java' },
  ];

  onSelect(department: any) {
    this.router.navigate(['components/departments', department.id]);
  }
}
