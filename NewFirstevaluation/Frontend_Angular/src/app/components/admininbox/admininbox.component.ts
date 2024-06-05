import { Component } from '@angular/core';
import { AdmininboxserviceService } from './Service/admininboxservice.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Message } from './Message/Message.model';



@Component({
  selector: 'app-admininbox',
  templateUrl: './admininbox.component.html',
  styleUrl: './admininbox.component.css'
})
export class AdmininboxComponent {
  messages: any;
  selectedSenderId:any;
  flag:boolean=false;
  
  contactForm!: FormGroup;
  adminEmail = 'admin@example.com';
  roleIdString!:string;
  constructor(private fb: FormBuilder,private router:ActivatedRoute,private admininbox:AdmininboxserviceService) {}
  


  ngOnInit(): void {
    this.contactForm = this.fb.group({
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
    this.fetchinbox();
  }
  fetchinbox(){
    this.admininbox.getAllinbox().subscribe(data=>{
      this.messages = data;
      console.log(data)
    })
  }

  Replymessage(senderId:Message){
    this.selectedSenderId = senderId;
    this.flag=true;
    this.roleIdString = senderId.senderId;
  }

  

  onSubmit(): void {

    if (this.contactForm.valid) {
      const message: Message= {
        senderId : this.roleIdString,
        message : this.contactForm.value.message,
        receiverId:'admin',
        id:this.selectedSenderId.id
      }
      console.log(message)
      this.admininbox.sendtograd(message).subscribe(response=>{
        alert("sent")
      }
      
   );
   alert("Message Sent");
   this.closeModal();
   this.fetchinbox();
    }

  }

  closeModal(){
    this.flag = false;
    this.selectedSenderId = null;
  }

}
