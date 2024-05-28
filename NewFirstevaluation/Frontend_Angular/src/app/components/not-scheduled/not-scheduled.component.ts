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
  location?: string;
  time?: string;
}

@Component({
  selector: 'app-not-scheduled',
  templateUrl: './not-scheduled.component.html',
  styleUrl: './not-scheduled.component.css'
})
export class NotScheduledComponent implements OnInit{

  students: Student[] = [];
  selectedStudent: Student | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents(): void {
    this.http.get<Student[]>('your-backend-api-url').subscribe(data => {
      this.students = data;
    });
  }

  openResume(student: Student): void {
    this.selectedStudent = student;
  }

  closeResume(): void {
    this.selectedStudent = null;
  }

  appointStudent(student: Student): void {
    // Logic for appointing student
  }

}
