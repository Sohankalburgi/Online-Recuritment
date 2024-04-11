import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  nationalities = ['Indian', 'American', 'British'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      fullname: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      birthdate: ['', Validators.required],
      nationality: ['', Validators.required],
      gender: ['', Validators.required] // Simplified gender field
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form Data:', this.registrationForm.value);
      // Implement actual submission logic here
    } else {
      this.registrationForm.markAllAsTouched(); // Ensure all fields are touched to show validation messages
    }
  }
}
