import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentRoute!: string;

  constructor(private route: Router,private router:ActivatedRoute) {}
  // ngOnInit(): void {
  //   this.router.paramMap.subscribe(params=>{
  //     this.roleIdString = String(params.get('roleIdString'));
  //   });
  // }

  onActivate(event: any) {
    this.currentRoute = this.route.url;
  }

  // roleIdString:string|null = null;

  // post(){
  //   console.log(this.roleIdString);
  //   if(this.roleIdString){
  //     alert("Please login")
  //   }
  //   else{
  //     this.route.navigate([`/job-register/${this.roleIdString}`])
  //   }
  // }
  
}