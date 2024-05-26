import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-emp-dash',
  templateUrl: './emp-dash.component.html',
  styleUrl: './emp-dash.component.css'
})
export class EmpDashComponent implements OnInit {

  employers: any[] = []; // Replace with your actual type

  ngOnInit() {
    this.loadEmployers();
  }

  loadEmployers() {
    // Fetch employers from the server
  }

  createEmployer() {
    // Open a form to create a new employer
  }

  editEmployer(employer: any) {
    // Open a form to edit the employer
  }

  deleteEmployer(id: number) {
    // Delete the employer
  }
  
}
