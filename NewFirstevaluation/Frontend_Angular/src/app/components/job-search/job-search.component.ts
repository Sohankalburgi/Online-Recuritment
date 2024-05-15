import { Component } from '@angular/core';
// import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent {
  searchTerm: string = '';
  selectedExperience: string = '';
  location: string = '';
  filters: string[] = ['Remote', 'MNC', 'Engineering', 'Supply Chain', 'Startup', 'Marketing', 'Fortune 500', 'Analytics', 'Project Management', 'Data Science', 'Sales'];
  experiences: string[] = ['0-1 years', '1-3 years', '3-5 years', '5-10 years', '10+ years'];
  // isLoggedIn: boolean = false; // Variable to track user's login status
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

  // constructor(private authService: AuthService) {}

  ngOnInit() {
    // Subscribe to the authentication status changes
    // this.authService.isAuthenticated().subscribe((loggedIn: boolean) => {
    //   this.isLoggedIn = loggedIn;
    // });
  }

  search() {
    // Implement your search logic here
    // if (this.isLoggedIn) {
    //   alert("You can access the website");
    //   // Perform search logic
    // } else {
    //   alert("Please Log In");
    //   // Display error message or redirect to login page
    // }
  }
}
