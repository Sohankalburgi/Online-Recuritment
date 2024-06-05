import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-messagedash',
  templateUrl: './messagedash.component.html',
  styleUrl: './messagedash.component.css'
})
export class MessagedashComponent implements OnInit{
  roleIdString!:string;
  constructor(private route:ActivatedRoute,private router:Router
  ){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.roleIdString = String(params.get('roleIdString'));
      console.log(this.roleIdString);
    });
  }
 
}
