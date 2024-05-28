import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChildComponent } from '../components/child/child.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, ChildComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild(ChildComponent) ChildComponent !: ChildComponent;

  title = 'myNewApp';
  number = 1;
  public name = 'Angular';
  public topic = 'Data Binding';
  public image = '/assets/asterixk.svg';
  public textField = '';
  public visibility: boolean = true;
  public newMessage: string = 'Hello from Parent Component';
  quantity: any = 2;
  price: any = 2;
  condition: boolean = false;
  currentView: string = '';
  isActive: boolean = true;
  isDisabled: boolean = false;
  message: string = ''
  textMessage : string = "helo new message"

  constructor(private detector: ChangeDetectorRef) { }

  ngAfterViewInit() {
    console.log(this.ChildComponent.message, 'this.ChildComponent.message');
    this.message = this.ChildComponent.message;
    this.detector.detectChanges();
  }

  onMessageChange(newMessage: string) {
    console.log("newMessage after the child update", newMessage);
    this.newMessage = newMessage;
  }

  toggleActive() {
    console.log("active");
    this.isActive = !this.isActive
  }

  toggleIsDisabled() {
    console.log("disabled");
    this.isDisabled = !this.isDisabled
  }


  products: any = [
    {
      name: "item 1",
    },
    {
      name: "item 2"
    },
    {
      name: "item 3"
    }
  ]

  switchVisibility() {
    this.visibility = !this.visibility;
  }

  displayContent() {
    console.log("displayed");

    this.condition = !this.condition
  }

  onClick() {
    console.log('button clicked');
  }

  user = {
    name: 'sravanthi'
  };

  // Direct mutation
  updateDirect() {
    this.user.name = 'mendu'; // directly assign the name property to the user, so ngDoCheck is triggered
  }

  // Re-assignment
  updateReassign() {
    this.user = { name: 'mendu' }; // Re-assigning the object to trigger change detection,
    // so first ngDoChanges trigger and then ngDoCheck
  }

  increment() {
    this.number++;
  }

  decrement() {
    this.number--;
  }

}
