import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../ServiceAuth/auth-service.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrl: './admin-dash.component.css'
})
export class AdminDashComponent implements OnInit {

  person:string|null = null;
  image:string|null = null;
  name:string|null = null;

  constructor(private router: Router, private authService:AuthServiceService,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.person = String(params.get('person'));
      console.log(this.person);
    });
    if(this.person === "1"){
      this.image = "assets/sohan.jpg";
      this.name = "sohan"
    }
    else if(this.person==="2"){
      this.image = "assets/sadaf.jpg";
      this.name = "sadaf"
    }
    else{
      this.image = "assets/rohit.jpeg";
      this.name = "rohit";
    }
  }



  navigate(path: string) {
    this.router.navigate([`/admin-dash/${path}`]);
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, false);
  }

  
  



  logout(){
    this.authService.logout();
  }

}

