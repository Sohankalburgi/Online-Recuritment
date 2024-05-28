import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ScheduledStudent {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  yearOfPassing: string;
  cgpa: string;
  language: string;
  keySkill: string;
  areaOfInterest: string;
  resume: string;
  scheduledDate: string;
  scheduledTime: string;
}


@Component({
  selector: 'app-scheduled',
  templateUrl: './scheduled.component.html',
  styleUrl: './scheduled.component.css'
})

export class ScheduledComponent implements OnInit {
  scheduledStudents: ScheduledStudent[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchScheduledStudents();
  }

  fetchScheduledStudents(): void {
    this.http.get<ScheduledStudent[]>('your-backend-api-url').subscribe(data => {
      this.scheduledStudents = data;
    });
  }

  viewResume(resumeUrl: string): void {
    // Logic to open a new tab to view resume
    window.open(resumeUrl, '_blank');
  }
}
