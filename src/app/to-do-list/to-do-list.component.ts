import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent implements OnInit {
  toDoList: any = []

  myNewData: any;

  constructor(public commonData: CommonService) { }

  ngOnInit() {
    this.toDoList = this.commonData.getToDo()
    console.log(this.toDoList, 'todolist');
  }

  onClick() {
    this.myNewData = 'My data through service file'
    this.commonData.addMyData(this.myNewData);
  }

  dataToParent () {
    this.commonData.parentData = 'This text is from child component'
  }

}
