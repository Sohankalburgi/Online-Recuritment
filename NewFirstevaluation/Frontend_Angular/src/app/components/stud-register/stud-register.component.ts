import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-stud-register',
  templateUrl: './stud-register.component.html',
  styleUrl: './stud-register.component.css'
})
export class StudRegisterComponent {

  studRegisterForm:FormGroup;

  constructor(private fb: FormBuilder){
    this.studRegisterForm = this.fb.group({
      'city' : ['', Validators.required],
      'state': ['', Validators.required],
      'pinCode': ['', Validators.required],
      'collegeName' : ['', Validators.required],
      'collegeAddress' : ['', Validators.required],
      'yearOfPassing' : ['', Validators.required],
      'cgpa' : ['', Validators.required]

    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.studRegisterForm.valid) {
      // Handle form submission logic here, e.g., sending data to server
      console.log(this.studRegisterForm.value);
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.studRegisterForm.get(controlName);
    console.log(`Checking validity for ${controlName}:`, control);

    return control ? control.invalid && (control.dirty || control.touched) : false;
  }



  getErrorMessage(controlName: string): string {
    const control = this.studRegisterForm.get(controlName);

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
