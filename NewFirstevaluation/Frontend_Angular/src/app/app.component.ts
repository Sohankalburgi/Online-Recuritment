import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentRoute!: string;

  constructor(private router: Router) {}

  onActivate(event: any) {
    this.currentRoute = this.router.url;
  }
}