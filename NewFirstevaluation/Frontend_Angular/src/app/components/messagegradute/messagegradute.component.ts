import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messagegradute',
  templateUrl: './messagegradute.component.html',
  styleUrl: './messagegradute.component.css'
})
export class MessagegraduteComponent {
  messages: { text: string, user: string }[] = [];
  messageText: string = '';
  adminemail:string ="admin@gmail.com"

  roleIdString: string|null=null;

  constructor(private route: Router,private router:ActivatedRoute){
  }

  ngOnInit() {
    this.router.paramMap.subscribe(params=>{
      this.roleIdString = params.get('roleIdString');
      console.log('RoleIdString:',this.roleIdString);
    });
  }

  sendMessage(): void {
   
  }
}
