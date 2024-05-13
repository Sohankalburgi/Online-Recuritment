// import { Component } from '@angular/core';
// import {JoblistService}from './services/joblist.service'

// @Component({
//   selector: 'app-job-list',
//   templateUrl: './job-list.component.html',
//   styleUrls: ['./job-list.component.css']
// })
// export class JobListComponent {
  
//   constructor(private joblist:JoblistService){
//     joblist.joblist().subscribe(()=>this.joblist=data);
//   }
// applyJob(_t22: any) {
// throw new Error('Method not implemented.');
// }
//   searchText: string = '';
//   items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Another Item', 'Something Else'];
// jobs: any;

//   clearSearch() {
//     this.searchText = '';
//   }
// }
import { Component, OnInit } from '@angular/core';
import { JoblistService } from './services/joblist.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  searchText: string = '';
  jobs: any[] = [];

  constructor(public joblist: JoblistService) {}

  ngOnInit() {
    this.getJobList();
  }

  getJobList() {
    this.joblist.joblist().subscribe((data: any) => {
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
