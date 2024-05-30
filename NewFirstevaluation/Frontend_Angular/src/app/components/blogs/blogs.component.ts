import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  roleIdString!:string;

  constructor(private router: Router) {}

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
}
