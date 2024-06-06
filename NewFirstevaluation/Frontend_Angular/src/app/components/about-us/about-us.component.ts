import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit{
  roleIdString!:string;

  constructor(private router: Router,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.roleIdString = String(params.get('roleIdString'));
      console.log(this.roleIdString);
    });
  }


  home(){
    if(this.roleIdString.startsWith("EMP")){
      this.router.navigate([`/home/${this.roleIdString}`]);
    }
    else if(this.roleIdString.startsWith("GRAD")){
      this.router.navigate([`/gradhome/${this.roleIdString}`])
    }
    else{
      this.router.navigate(['/home']);
    }
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

}
