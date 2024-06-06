import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InboxserviceService } from './Services/inboxservice.service';

@Component({
  selector: 'app-gradinbox',
  templateUrl: './gradinbox.component.html',
  styleUrl: './gradinbox.component.css'
})
export class GradinboxComponent implements OnInit{
  messages: any;
  roleIdString: string | null = null;

  constructor(private router:ActivatedRoute,private inboxservice:InboxserviceService
  ) {}


  ngOnInit(): void {
    this.router.paramMap.subscribe(params=>{
      this.roleIdString = params.get('roleIdString');
      console.log('RoleIdString:',this.roleIdString);
    });
    this.fetchinbox();
  }

  fetchinbox(){
    this.inboxservice.getAllinbox(this.roleIdString).subscribe(data=>{
      this.messages = data;
    })
  }
  deletemessage(id:number){
    this.inboxservice.deleteMessage(id).subscribe(Response=>{
      alert("deleted")
      this.fetchinbox()
    },error=>{
      alert("error");
    });
 
  }
}
