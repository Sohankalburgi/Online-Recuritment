import { Component } from '@angular/core';

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

  search() {
    // Implement your search logic here
  }
}


