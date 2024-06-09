import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../ServiceAuth/auth-service.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrl: './admin-dash.component.css'
})
export class AdminDashComponent {
  roleIdString!:string;

  constructor(private router: Router, private authService:AuthServiceService) {}

  navigate(path: string) {
    this.router.navigate([`/admin-dash/${path}`]);
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, false);
  }

  post(){
    console.log(this.roleIdString);
    if (this.roleIdString === 'null' || this.roleIdString === null) {
      alert('Please login As Employer');
    } else {
      this.router.navigate([`/job-register/${this.roleIdString}`]);
    }
  }

  postappoint() {
    console.log(this.roleIdString);
    if (this.roleIdString === 'null' || this.roleIdString === null) {
      alert('Please login As Employer');
    } else {
      this.router.navigate([`/emp-home-page/${this.roleIdString}`]);
    }
    }

  jobsforyou(){
    console.log(this.roleIdString);
    this.router.navigate([`/gradhome/${this.roleIdString}`])
  }


  logout(){
    this.authService.logout();
  }

}

