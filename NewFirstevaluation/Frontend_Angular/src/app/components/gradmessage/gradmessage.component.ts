import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from './Services/message.service';
import { Message } from './Model/Message.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gradmessage',
  templateUrl: './gradmessage.component.html',
  styleUrl: './gradmessage.component.css'
})
export class GradmessageComponent {
  contactForm!: FormGroup;
  adminEmail = 'admin@example.com';
  roleIdString!:string;
  isLoading =false;
  
  constructor(private fb: FormBuilder,private router:ActivatedRoute,private messageService:MessageService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
    this.router.paramMap.subscribe(params => {
      this.roleIdString = String(params.get('roleIdString'));
      console.log(this.roleIdString);
    });
  }

  onSubmit(): void {

    if (this.contactForm.valid) {
      const message:Message = {
        senderId : this.roleIdString,
        message : this.contactForm.value.message,
        receiverId:''
      }
      if(this.isLoading!=true){
        alert("loading,please Wait Until confirmation message Sent")
      }
      this.messageService.sendtoadmin(message).subscribe(response=>{
        alert("Message Sent");
      },error=>{
        alert("error")
      }
    )
      
    }
  }
}
