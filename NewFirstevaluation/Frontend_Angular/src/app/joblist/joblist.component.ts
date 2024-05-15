import { Component } from '@angular/core';
import { JobListService } from './Service/job-list.service';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrl: './joblist.component.css'
})
export class JoblistComponent {
  searchText: string = '';
  jobs: any[] = [];
  joblist: any;

  constructor(public joblistservice:JobListService) {}

  ngOnInit() {
    this.getJobList();
  }

  getJobList() {
    this.joblistservice.joblistsearch("full").subscribe((data: any) => {
      console.warn("data",data)
      this.jobs = data;
    });
  }

  applyJob(job: any) {
    // Implementation for applying to a job
  }

  clearSearch() {
    this.searchText = '';
  }
}
