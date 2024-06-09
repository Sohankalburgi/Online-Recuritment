import { Component, OnInit} from '@angular/core';
import { EmployerserviceService } from './Services/employerservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employer, User } from './Model/Employer.model';
import { Job } from '../job-dash/Model/Job.model';

@Component({
  selector: 'app-emp-dash',
  templateUrl: './emp-dash.component.html',
  styleUrl: './emp-dash.component.css'
})
export class EmpDashComponent implements OnInit {



  nationalities = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia',
    'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium',
    'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria',
    'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad',
    'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia',
    'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea',
    'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia',
    'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras',
    'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan',
    'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kosovo', 'Kuwait', 'Kyrgyzstan',
    'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar',
    'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico',
    'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia',
    'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway',
    'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines',
    'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
    'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal',
    'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia',
    'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria',
    'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia',
    'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom',
    'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia',
    'Zimbabwe'
];
  selectedEmployer:any = null;

  employers: any[] = []; // Replace with your actual type
  EmployerForm!: FormGroup;
  selectedEmployerforedit: any;
  employer!:Employer
  user!:User
  selectedEmployerfordelete: any=null;
  jobs: any[] = []; 
  job!: Job;
  selectedJobfordelete: any=null;

  filteredAppointments: any[] = [];
  searchTerm: string = '';
  constructor(private employerservice:EmployerserviceService,private fb:FormBuilder){}



  ngOnInit() {
    this.loadEmployers();
    this.EmployerForm = this.fb.group({
      roleId: [{ value: '', disabled: true }],
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[789]\\d{9}$'), Validators.minLength(10), Validators.maxLength(10)]],
      nationality: ['', Validators.required],
      companyName:['',Validators.required],
      companyType:['',Validators.required],
      companySize:['',Validators.required],
      companyAddress:['',Validators.required],
      companyDescription:['',Validators.required],
      roleInCompany:['',Validators.required]
    });
  }

  filterEmployer() {
    if (this.searchTerm) {
      console.log(this.searchTerm)
      
      this.filteredAppointments = this.employers.filter(employer =>
        employer.roleId.roleId.includes(this.searchTerm)
      );
      console.log(this.filteredAppointments)
      this.employers = this.filteredAppointments;
    } else {
      this.loadEmployers();
    }
  }

  loadEmployers() {
    // Fetch employers from the server
    this.employerservice.getListOfEmployer().subscribe(data=>{
      this.employers = data;
      this.employers.forEach(i=>{
        this.employerservice.getUserbyroleId(i.roleId.roleId).subscribe(user=>{
          i.user = user;
        })
        this.employerservice.getAllJobs(i.roleId.roleId).subscribe(j=>{
          i.jobs = j;
        })
      })
      console.log(this.employers)
    })
  }

  deleteJob(id: number) {
    // Delete the job
    console.log(id);
    this.selectedJobfordelete = id;
    console.log(this.selectedJobfordelete);
  }

  deleteJobbyJobId() {
    console.log(this.selectedJobfordelete)
    this.employerservice.deleteJobByjobId(this.selectedJobfordelete).subscribe((response)=>{
      console.log("submitted");
      alert("deleted");
      },error=>{
        alert("Internal server error")
      });
    this.closeModalforDeleteofJob();
    this.closeModalforDelete();
    this.loadEmployers();
  }

  closeModalforDeleteofJob():void{
    this.selectedJobfordelete = null;
  }
  onSubmit(){
    if(this.EmployerForm.valid){
      const formValues = this.EmployerForm.value;

      this.user = {
        ...this.user,
        roleId: { roleId: formValues.roleId },
        address: formValues.address,
        name: formValues.name,
        nationality: formValues.nationality,
        phone: formValues.phone,
      };

      this.employer ={
        ...this.employer,
        roleId:{roleId:formValues.roleId},
        roleInCompany:formValues.roleInCompany,
        companyName:formValues.companyName,
        companyAddress:formValues.companyAddress,
        companyDescription:formValues.companyDescription,
        companySize:formValues.companySize,
        companyType:formValues.companyType,

      }

      this.employerservice.updateUser(this.user,this.selectedEmployerforedit.roleId.roleId).subscribe((response)=>{
        console.log("updatedUser")
      },
      error=>{
        alert("internal server error")
      }
    );
      this.employerservice.updateEmployer(this.employer,this.selectedEmployerforedit.roleId.roleId).subscribe(
        (response)=>{
          console.log("updatedEmployer")
          alert("submiited");
        },
       error=>(alert("internal server error"))
      );
      
      this.closeModalforEdit();
      this.loadEmployers();
    }
  }

  createEmployer() {
    // Open a form to create a new employer
  }

  editEmployer(employer: any) {
    // Open a form to edit the employer
    this.selectedEmployerforedit = employer
  }

  deleteEmployer(id: number) {
    // Delete the employer
    this.selectedEmployerfordelete = id;
  }

  infoEmployer(employer:any){
    this.selectedEmployer = employer
  }

  closeModal():void{
    this.selectedEmployer = null;
  }

  closeModalforEdit() {
    this.selectedEmployerforedit = null;
    }
  
  isInvalid(controlName: string): boolean {
    const control = this.EmployerForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  getErrorMessage(controlName: string): string {
    const control = this.EmployerForm.get(controlName);
    if (control && control.errors) {
      if (control.errors['required']) {
        return `${controlName} is required.`;
      } else if (control.errors['email']) {
        return `Invalid email address.`;
      } else if (control.errors['pattern']) {
        return `Invalid ${controlName}.`;
      }
    }
    return '';
  }

  closeModalforDelete():void{
    this.selectedEmployerfordelete = null;
  }

  deleteEmployerByrole() {
    this.employerservice.deleteUserByRole(this.selectedEmployerfordelete).subscribe(Response=>{
      if(Response==true){
         alert("deleted");
      }else{
        alert("internal server error")
      }
    },error=>{
      alert("internal server error")
    });
    this.closeModalforDelete();
    this.loadEmployers();
  }

}
