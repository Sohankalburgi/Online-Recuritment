import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  
  forgotpasswordform!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.forgotpasswordform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {validator: this.checkPasswords });
  }
form: any;

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('newPassword')?.value;
    let confirmPass = group.get('confirmPassword')?.value;

    return pass === confirmPass ? null : { notSame: true }     
  }
}