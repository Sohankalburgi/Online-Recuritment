import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-dash',
  templateUrl: './job-dash.component.html',
  styleUrl: './job-dash.component.css'
})
export class JobDashComponent implements OnInit {

  jobs: any[] = []; // Replace with your actual type

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    // Fetch jobs from the server
  }

  createJob() {
    // Open a form to create a new job
  }

  editJob(job: any) {
    // Open a form to edit the job
  }

  deleteJob(id: number) {
    // Delete the job
  }

}
