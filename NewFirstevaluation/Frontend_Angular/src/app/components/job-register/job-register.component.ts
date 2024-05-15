import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-job-register',
  templateUrl: './job-register.component.html',
  styleUrl: './job-register.component.css'
})
export class JobRegisterComponent {

  jobRegisterForm !: FormGroup;

  emailPattern: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";

    constructor(private fb:FormBuilder){
      this.jobRegisterForm = this.fb.group({
        'jobName' : ['', [Validators.required, Validators.minLength(3),Validators.maxLength(50)]],
        'jobSalary' : ['', [Validators.required, Validators.pattern('^[789]\\d{9}$'), Validators.minLength(10), Validators.maxLength(10)]],
        'jobType' : ['', Validators.required],
        'jobDescription' : ['', Validators.required],
        'jobVacancy' : ['', Validators.required],


      });
    }

    ngOnInit(): void {

    }

    onSubmit(): void {
      if (this.jobRegisterForm.valid) {
        // Handle form submission logic here, e.g., sending data to server
        console.log(this.jobRegisterForm.value);
      }
    }

    isInvalid(controlName: string): boolean {
      const control = this.jobRegisterForm.get(controlName);
      console.log(`Checking validity for ${controlName}:`, control);

      return control ? control.invalid && (control.dirty || control.touched) : false;
    }



    getErrorMessage(controlName: string): string {
      const control = this.jobRegisterForm.get(controlName);

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
