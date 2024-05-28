import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { ToDoListComponent } from "./to-do-list/to-do-list.component";
import { ToDoAppComponent } from "./to-do-app/to-do-app.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, CommonModule, RouterModule, ChildComponent, ToDoListComponent, ToDoAppComponent]
})
export class AppComponent {

}
