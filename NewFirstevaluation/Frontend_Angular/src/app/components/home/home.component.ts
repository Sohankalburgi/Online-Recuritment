import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  roleIdString!:string;
  constructor(private route: Router,private router:ActivatedRoute) {
    
  }
  
  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.roleIdString = String(params.get('roleIdString'));
      console.log(this.roleIdString);
    });
  }

  post(){
    console.log(this.roleIdString);
    if (this.roleIdString === 'null' || this.roleIdString === null) { 
      alert('Please login');
    } else {
      this.route.navigate([`/job-register/${this.roleIdString}`]);
    }
  }

  jobsforyou(){
    console.log(this.roleIdString);
    this.route.navigate([`/gradhome/${this.roleIdString}`])
  }
}
