import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-emp-register',
  templateUrl: './emp-register.component.html',
  styleUrl: './emp-register.component.css'
})
export class EmpRegisterComponent implements OnInit {
  empRegisterForm: FormGroup;

  constructor(private fb: FormBuilder){

    this.empRegisterForm = this.fb.group({
      'yourRole': ['', Validators.required],
      'companyName': ['', Validators.required],
      'companyType': ['', Validators.required],
      'companyDesc': ['', Validators.required],
      'companyAdd': ['', Validators.required],
      'companySize': ['', [Validators.required,Validators.pattern('^[789]\\d{9}$')]]

    });

  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.empRegisterForm.valid) {
      // Handle form submission logic here, e.g., sending data to server
      console.log(this.empRegisterForm.value);
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.empRegisterForm.get(controlName);
    console.log(`Checking validity for ${controlName}:`, control);

    return control ? control.invalid && (control.dirty || control.touched) : false;
  }



  getErrorMessage(controlName: string): string {
    const control = this.empRegisterForm.get(controlName);

    if (!control) {
      console.log(`Control ${controlName} not found.`);
      return '';
    }

    if(control.hasError('pattern')){
      if(controlName==='password'){
        return "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long."
      }
    }

    if(control.hasError('pattern')){
      if(controlName==="email"){
        return "Invalid email pattern"
      }
    }

    if (control.hasError('pattern')) {

        return 'Invalid phone number format. Please enter a 10-digit number.';
    }

    if (control.hasError('required')) {
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is required.`;
    }

    if (control.hasError('email')) {
      return 'Invalid email format';
    }

    if (control.errors?.['minlength']) {
      return `Minimum length should be ${(control.errors as any).minlength.requiredLength}`;
    }



    return '';
  }
  
}
