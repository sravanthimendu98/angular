import { Component } from '@angular/core';
import { ToDoAppComponent } from "../to-do-app/to-do-app.component";
import { ToDoListComponent } from "../to-do-list/to-do-list.component";

@Component({
    selector: 'app-add-components',
    standalone: true,
    templateUrl: './add-components.component.html',
    styleUrl: './add-components.component.css',
    imports: [ToDoAppComponent, ToDoListComponent]
})
export class AddComponentsComponent {

}
