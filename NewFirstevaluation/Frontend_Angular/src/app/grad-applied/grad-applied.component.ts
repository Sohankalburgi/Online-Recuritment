import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AppliedJob {
  jobName: string;
  jobId: string;
}


@Component({
  selector: 'app-grad-applied',
  templateUrl: './grad-applied.component.html',
  styleUrl: './grad-applied.component.css'
})
export class GradAppliedComponent implements OnInit{

  appliedJobs: AppliedJob[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAppliedJobs();
  }

  fetchAppliedJobs(): void {
    this.http.get<AppliedJob[]>('your-backend-api-url/applied').subscribe(data => {
      this.appliedJobs = data;
    });
  }

}
