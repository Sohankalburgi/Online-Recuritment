import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface PendingAppointment {
  jobName: string;
  jobId: string;
  pending: boolean;
}


@Component({
  selector: 'app-grad-pending',
  templateUrl: './grad-pending.component.html',
  styleUrl: './grad-pending.component.css'
})
export class GradPendingComponent implements OnInit {

  pendingAppointments: PendingAppointment[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPendingAppointments();
  }

  fetchPendingAppointments(): void {
    this.http.get<PendingAppointment[]>('your-backend-api-url/pending').subscribe(data => {
      this.pendingAppointments = data;
    });
  }

}
