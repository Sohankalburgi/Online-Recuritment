import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  nationalities = ['', 'American', 'Australian', 'British', 'Canadian', 'Indian']; 
  // ...

  emailMatchValidator: ValidatorFn = (control: AbstractControl) => {
    const email = control.get('email')?.value;
    const emailVerification = control.get('emailVerification')?.value;

    if (email !== emailVerification) {
      return { notMatch: true };
    }

    return null;
  };

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'fullname': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'emailVerification': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, [Validators.required, Validators.pattern('[0-9]{10}')]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'birthdate': new FormControl(null, Validators.required),
      'nationality': new FormControl(null, Validators.required)
    }, { validators: this.emailMatchValidator });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form Data:', this.registrationForm.value);
      
    } else {
      this.registrationForm.markAllAsTouched(); 
    }
  }
}