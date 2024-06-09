import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../ServiceAuth/auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GraduateserviceService } from '../grad-dash/Services/graduateservice.service';
import { College, Graduate, User } from '../grad-dash/Models/graduate.model';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrl: './job-search.component.css'
})
export class JobSearchComponent {


  selectedGraduateforedit: any = null;
  graduateForm!: FormGroup;
  user!:User;
  college!:College;
  graduate!:Graduate;

  searchTerm: string = '';
  selectedExperience: string = '';
  location: string = '';
  filters: string[] = ['Remote', 'MNC', 'Engineering', 'Supply Chain', 'Startup', 'Marketing', 'Fortune 500', 'Analytics', 'Project Management', 'Data Science', 'Sales'];
  experiences: string[] = ['0-1 years', '1-3 years', '3-5 years', '5-10 years', '10+ years'];
  companies: { name: string, logo: string, description: string, link?: string }[] = [
    { name: 'Infosys', logo: 'https://www.naukri.com/hotjobs/images/v3/infosys_nov13.gif', description: 'Global Tech services.', link: 'https://www.infosys.com/' },
    { name: 'Capgemini', logo: 'https://img.naukimg.com/logo_images/groups/v2/1288.gif', description: 'Global digital solutions & technology company.', link: 'https://www.capgemini.com/' },
    { name: 'Cognizant', logo: 'https://img.naukimg.com/logo_images/groups/v2/4156.gif', description: 'Leading ITeS company with global presence.', link: 'https://www.cognizant.com/in/en' },
    { name: 'GenPact', logo: 'https://img.naukimg.com/logo_images/groups/v2/1288.gif', description: 'global professional services firm delivering business.', link: 'https://www.genpact.com/' },
    { name: 'Amazon', logo: 'https://www.naukri.com/hotjobs/images/v3/amazon.gif', description: 'Global E-commerce services.', link: 'https://www.amazon.jobs/en/locations/PE%20Hubs%20-%20India' },
    { name: 'Hexaware', logo: 'https://img.naukimg.com/logo_images/groups/v1/12466.gif', description: 'Global professional Tech services.', link: 'https://hexaware.com/' },
    { name: 'Carelon', logo: 'https://img.naukimg.com/logo_images/groups/v1/4608615.gif', description: 'Global digital solutions & technology company.', link: 'https://www.carelon.com/' },
    { name: 'Accenture', logo: 'https://img.naukimg.com/logo_images/groups/v1/10476.gif', description: 'Leading ITeS company with global presence.', link: 'https://www.accenture.com/in-en' },
    { name: 'MPhasis', logo: 'https://img.naukimg.com/logo_images/groups/v1/45204.gif', description: 'global professional services delivering business.', link: 'https://www.mphasis.com/home.html' },
    { name: 'TCS', logo: 'https://img.naukimg.com/logo_images/groups/v1/223346.gif', description: 'Global professional E-commerce services.', link: 'https://www.tcs.com/' },
    { name: 'Tech Mahindra', logo: 'https://www.naukri.com/hotjobs/images/v3/TechM_Feb23.gif', description: 'Global professional Tech services.', link: 'https://www.techmahindra.com/en-in/?f=3981448197' },
    { name: 'Liv Pure', logo: 'https://img.naukimg.com/logo_images/groups/v1/1344780.gif', description: 'Global digital solutions & technology company.', link: 'https://livpure.com/' },
    { name: 'Udupi', logo: 'https://dynamic.placementindia.com/recruiter_comp_logo/998586_20210422100602.jpg', description: 'Leading ITeS company with global presence.', link: 'https://www.adanipower.com/operational-power-plants/udupi-karnataka' },
    { name: 'Lyra', logo: 'https://dynamic.placementindia.com/recruiter_comp_logo/707307_20180423093802.jpg', description: 'global professional technology services.', link: 'https://mylyra.com/' },
    { name: 'Sunrise Group', logo: 'https://dynamic.placementindia.com/recruiter_comp_logo/943507_20210310064415.jpg', description: 'Global professional E-commerce services.', link: 'https://www.sunriseintegration.com/services/ecommerce-development' }
  ];

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


  roleIdString: string|null = null;

  constructor(private route: Router,private router:ActivatedRoute,private authService:AuthServiceService,
    private graduateservice:GraduateserviceService,private fb:FormBuilder
  ){
  }

  ngOnInit() {
    this.router.paramMap.subscribe(params=>{
      this.roleIdString = params.get('roleIdString');
      console.log('RoleIdString:',this.roleIdString);
    });

    
    this.graduateForm = this.fb.group({
      roleId: [{ value: '', disabled: true }],
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[789]\\d{9}$'), Validators.minLength(10), Validators.maxLength(10)]],
      nationality: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pinCode: ['', [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')]],
      yearOfPassing: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      cgpa: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d{1,2})?$')]],
      collegeName: ['', Validators.required],
      collegeDescription: ['', Validators.required],
      collegeAddress: ['', Validators.required],
    });
  }

  editGraduate(graduate: any) {
    console.log(graduate)
    this.selectedGraduateforedit = graduate
    console.log(this.selectedGraduateforedit)
  }

  onSubmit() {
    if (this.graduateForm.valid) {
    
     
      const formValues = this.graduateForm.value;
      const roleId = this.roleIdString;
      
      this.user = {
        ...this.user,
        roleId: { roleId: formValues.roleId},
        address: formValues.address,
        name: formValues.name,
        nationality: formValues.nationality,
        phone: formValues.phone,
      };

      this.college = {
        ...this.college,
        roleId: { roleId: formValues.roleId },
        collegeName: formValues.collegeName,
        collegeDescription: formValues.collegeDescription,
        collegeAddress: formValues.collegeAddress
      };

      this.graduate = {
        ...this.graduate,
        roleId: { roleId: formValues.roleId },
        cgpa: formValues.cgpa,
        city: formValues.city,
        pinCode: formValues.pinCode,
        state: formValues.state,
        yearOfPassing: formValues.yearOfPassing
      };

     
      
      this.graduateservice.updateUser(this.user,this.selectedGraduateforedit).subscribe(
        (response)=>{
        console.log("submitted");
        },
        (error)=>{
         alert("internal server error")
        }
      );
      this.graduateservice.updateCollege(this.college,this.selectedGraduateforedit).subscribe(
        (response)=>{
          console.log("submitted");
          },
          (error)=>{
            alert("internal server error")
          }
      );
      this.graduateservice.updateGraduate(this.graduate,this.selectedGraduateforedit).subscribe(
        (response)=>{
          console.log("submitted");
          },
          error=>{
            alert("internal server error")
          }
      );
      alert("submitted")
      this.closeModalforEdit();
      
    }
  }

  closeModalforEdit():void{
    this.selectedGraduateforedit = null;
  }

  

  search() {
    if(this.searchTerm===''){
      alert("Enter the search");
    }
    else if(this.roleIdString==null){
    this.route.navigate([`/jobsearch/${this.searchTerm}`]);
    }
    else{
      this.route.navigate([`/jobsearch/${this.roleIdString}/${this.searchTerm}`]);
    }
  }

  openLink(link: string | undefined) {
    if (link) {
      window.open(link, '_blank');
    }
  }

  post(){
    console.log(this.roleIdString);
    if (this.roleIdString === 'null' || this.roleIdString === null) {
      alert('Please login As Employer');
    } else {
      this.route.navigate([`/job-register/${this.roleIdString}`]);
    }
  }

  postappoint() {
    console.log(this.roleIdString);
    if (this.roleIdString === 'null' || this.roleIdString === null) {
      alert('Please login As Employer');
    } else {
      this.route.navigate([`/emp-home-page/${this.roleIdString}`]);
    }
    }

  jobsforyou(){
    console.log(this.roleIdString);
    this.route.navigate([`/gradhome/${this.roleIdString}`])
  }

  logout(){
    this.authService.logout();
  }

  home(){
    if(this.roleIdString?.startsWith('EMP')){
      this.route.navigate([`/home/${this.roleIdString}`])
    }
    else{
      this.route.navigate([`/gradhome/${this.roleIdString}`])
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.graduateForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  getErrorMessage(controlName: string): string {
    const control = this.graduateForm.get(controlName);
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

  }





