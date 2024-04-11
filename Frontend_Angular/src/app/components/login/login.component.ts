import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  errorMessage!: string; 
  hide = true; 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Data:', this.loginForm.value);
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
    }
  }
}
