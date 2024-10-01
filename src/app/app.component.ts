import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, CommonModule, RouterModule],
})
export class AppComponent {
  constructor(private router: Router) {}
  shouldShowNavbar(): boolean {
    return this.router.url !== '/login';
  }
}
