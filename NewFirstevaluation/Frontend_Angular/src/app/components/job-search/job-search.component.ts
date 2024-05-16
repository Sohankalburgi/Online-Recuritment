import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrl: './job-search.component.css'
})
export class JobSearchComponent {
  searchTerm: string = '';
  selectedExperience: string = '';
  location: string = '';
  filters: string[] = ['Remote', 'MNC', 'Engineering', 'Supply Chain', 'Startup', 'Marketing', 'Fortune 500', 'Analytics', 'Project Management', 'Data Science', 'Sales'];
  experiences: string[] = ['0-1 years', '1-3 years', '3-5 years', '5-10 years', '10+ years'];
  companies: { name: string, logo: string, description: string }[] = [
    { name: 'Infosys', logo: 'https://www.naukri.com/hotjobs/images/v3/infosys_nov13.gif', description: 'Global Tech services.' },
    { name: 'Capgemini', logo: 'https://img.naukimg.com/logo_images/groups/v2/1288.gif', description: 'Global digital solutions & technology company.' },
    { name: 'Cognizant', logo: 'https://img.naukimg.com/logo_images/groups/v2/4156.gif', description: 'Leading ITeS company with global presence.' },
    { name: 'GenPact', logo: 'https://img.naukimg.com/logo_images/groups/v2/1288.gif', description: 'global professional services firm delivering business .' },
    { name: 'Amazon', logo: 'https://www.naukri.com/hotjobs/images/v3/amazon.gif', description: 'Global E-commerce services.' },
    { name: 'Hexaware', logo: 'https://img.naukimg.com/logo_images/groups/v1/12466.gif', description: 'Global professional Tech services.' },
    { name: 'Carelon', logo: 'https://img.naukimg.com/logo_images/groups/v1/4608615.gif', description: 'Global digital solutions & technology company.' },
    { name: 'Accenture', logo: 'https://img.naukimg.com/logo_images/groups/v1/10476.gif', description: 'Leading ITeS company with global presence.' },
    { name: 'MPhasis', logo: 'https://img.naukimg.com/logo_images/groups/v1/45204.gif', description: 'global professional services delivering business .' },
    { name: 'TCS', logo: 'https://img.naukimg.com/logo_images/groups/v1/223346.gif', description: 'Global professional E-commerce services.' },
    { name: 'Tech Mahindra', logo: 'https://www.naukri.com/hotjobs/images/v3/TechM_Feb23.gif', description: 'Global professional Tech services.' },
    { name: 'Liv Pure', logo: 'https://img.naukimg.com/logo_images/groups/v1/1344780.gif', description: 'Global digital solutions & technology company.' },
    { name: 'Udupi', logo: 'https://dynamic.placementindia.com/recruiter_comp_logo/998586_20210422100602.jpg', description: 'Leading ITeS company with global presence.' },
    { name: 'Lyra', logo: 'https://dynamic.placementindia.com/recruiter_comp_logo/707307_20180423093802.jpg', description: 'global professional technology services.' },
    { name: 'Sunrise Group', logo: 'https://dynamic.placementindia.com/recruiter_comp_logo/943507_20210310064415.jpg', description: 'Global professional E-commerce services.' }
  ];

  roleIdString: string|null=null;

  constructor(private route: Router,private router:ActivatedRoute){
  }

  ngOnInit() {
    this.router.paramMap.subscribe(params=>{
      this.roleIdString = params.get('roleIdString');
      console.log('RoleIdString:',this.roleIdString);
    });
  }

  search() {
    if(this.roleIdString==null){
    this.route.navigate([`/jobsearch/${this.searchTerm}`]);
    }
    else{
      this.route.navigate([`/jobsearch/${this.roleIdString}/${this.searchTerm}`]);
    }
  }
}


