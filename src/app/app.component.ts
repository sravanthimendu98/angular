import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./components/child/child.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [FormsModule, ChildComponent]
})


export class AppComponent {
  title = 'myNewApp';

  number = 123;

  public name = "Angular";
  public topic = "Data Binding";

  public image = '/assets/asterixk.svg';

  public textField = ""

  onClick(){
    console.log("button clicked");
  }

  increment(){
    this.number++
  }

  decrement(){
    this.number--
  }
  
}
