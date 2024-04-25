import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  
  forgotpasswordform!: FormGroup;
  errorMessage: string = ''; 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.forgotpasswordform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {validator: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) { 
    let pass = group.get('newPassword')?.value;
    let confirmPass = group.get('confirmPassword')?.value;

    return pass === confirmPass ? null : { notSame: true }     
  }

  onSubmit() {
    if (this.forgotpasswordform.valid) {
      // handle the form submission
      console.log(this.forgotpasswordform.value);
    } else {
      this.errorMessage = 'Form is not valid'; 
    }
  }
}