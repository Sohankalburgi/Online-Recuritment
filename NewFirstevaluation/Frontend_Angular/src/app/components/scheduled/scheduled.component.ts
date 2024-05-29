import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Student {
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
  date: string;
  time: string;
}

@Component({
  selector: 'app-scheduled',
  templateUrl: './scheduled.component.html',
  styleUrl: './scheduled.component.css'
})

export class ScheduledComponent implements OnInit {

  scheduledStudents: Student[] = [];
  selectedStudent: Student | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchScheduledStudents();
  }

  fetchScheduledStudents(): void {
    this.http.get<Student[]>('your-backend-api-url').subscribe(data => {
      this.scheduledStudents = data;
    });
  }

  openResume(student: Student): void {
    this.selectedStudent = student;
  }

  closeResume(): void {
    this.selectedStudent = null;
  }
}
