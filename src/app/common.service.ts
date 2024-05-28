import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public myData: any = [];
  public parentData: string = "parent data";


  list: any = [
    'list 1', 'list 2'
  ]

  constructor() { }

  getToDo() {
    return this.list
  }

  addToDo(item: any) {
    console.log("enter service");
    this.list.push(item);
  }

  addMyData(item: any) {
    console.log(item, 'item');
    this.myData.push(item);
    console.log("addmydata", this.myData);
  }

  getMyData() {
    console.log(this.myData, "service file");
    return this.myData;
  }
}
