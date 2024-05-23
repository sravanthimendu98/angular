import { Component, OnInit, Input , OnChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() myNumber: number | undefined;

  ngOnChanges() {
    console.log("ngonchange");
  }

  ngOnInit() {
    console.log("ngoninit");
  }

}
