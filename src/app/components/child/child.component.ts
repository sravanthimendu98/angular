import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, DoCheck, Output, EventEmitter,
 } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  @Input() myNumber: number | undefined;
  @Input() changeUser: any | undefined;

  @Input() parentMessage: string | undefined;

  @Output() messageChange = new EventEmitter<string>();

  message: string = 'message from child'

  constructor() {}

  updateMessage() {
    this.parentMessage = "hello";
    this.messageChange.emit(this.parentMessage);
    console.log(this.parentMessage, 'newmesage');

  }

  ngOnChanges(changes: SimpleChanges) { // any changes in the value from parent componnet
    console.log('ngOnChanges', changes);
    if (changes['myNewNumber']) {
      const newNumber: SimpleChange = changes['myNewNumber'];
      console.log('ngOnChanges - previous value:', newNumber.previousValue);
      console.log('ngOnChanges - current value:', newNumber.currentValue);
    }
    if (changes['changeUser']) {
      const userChange: SimpleChange = changes['changeUser'];
      console.log('ngOnChanges - previous user:', userChange.previousValue);
      console.log('ngOnChanges - current user:', userChange.currentValue);
    }
  }

  ngOnInit() {
    console.log('ngOnInit'); // executed only once at initial render
  }

  ngDoCheck() {
    console.log('ngDoCheck');
    console.log(this.changeUser, 'changeUser'); // executed every time after the change detection  
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit"); //executed only once after the ngdocheck
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked"); //used for multiple executions after the ngDoCheck
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit"); // dom interaction
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log("destroy");
  }
}
