import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-app.component.html',
  styleUrl: './to-do-app.component.css'
})
export class ToDoAppComponent implements OnInit {
  display: any;

  constructor(public serviceData: CommonService) {}

  addList(input: any) {
    this.serviceData.addToDo(input.value)
    input.value = ''
    console.log(this.serviceData.getToDo(), 'todoapp');
  }

  ngOnInit() {
    this.display = this.serviceData.getMyData()
    console.log(this.display,"display");
    
  }

}
