import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../ServiceAuth/auth-service.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrl: './admin-dash.component.css'
})
export class AdminDashComponent{

  // userEmail: string | null = null;
  // userImage: string = 'assets/sadaf-image.jpg';
  roleIdString!:string;

  constructor(private router: Router, private authService:AuthServiceService) {}


  // ngOnInit(): void {
  //   this.getUserEmail();
  // }

  // getUserEmail(): void {
  //   const userEmail = localStorage.getItem('userEmail'); // Get email from local storage
  //   if (userEmail) {
  //     this.userEmail = userEmail;
  //     this.setUserImage(userEmail);
  //   } else {
  //     this.router.navigate(['/admin-login']); // Redirect to login if no email is found
  //   }
  // }

  // setUserImage(email: string): void {
  //   if (email === 'sadaf@gmail.com') {
  //     this.userImage = 'assets/sadaf-image.jpg';
  //   } else if (email === 'sohan@gmail.com') {
  //     this.userImage = 'assets/sohan-image.jpg';
  //   } else {
  //     this.userImage = 'assets/default-image.jpg';
  //   }
  // }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  navigate(path: string) {
    this.router.navigate([`/admin-dash/${path}`]);
  }

  // isActive(route: string): boolean {
  //   return this.router.isActive(route, false);
  // }

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

