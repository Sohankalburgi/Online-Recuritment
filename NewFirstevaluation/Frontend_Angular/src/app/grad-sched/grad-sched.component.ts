import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ScheduledAppointment {
  jobName: string;
  jobId: string;
  pending: boolean;
}


@Component({
  selector: 'app-grad-sched',
  templateUrl: './grad-sched.component.html',
  styleUrl: './grad-sched.component.css'
})
export class GradSchedComponent implements OnInit{
  scheduledAppointments: ScheduledAppointment[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchScheduledAppointments();
  }

  fetchScheduledAppointments(): void {
    this.http.get<ScheduledAppointment[]>('your-backend-api-url/scheduled').subscribe(data => {
      this.scheduledAppointments = data;
    });
  }

}
