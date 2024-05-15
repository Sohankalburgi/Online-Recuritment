import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  currentRoute!: string;
  isLoggedIn: boolean = false; // Variable to track user's login status

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // Subscribe to the authentication status changes
    this.authService.isAuthenticated().subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }

  onActivate(event: any) {
    this.currentRoute = this.router.url;
  }
}
