import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-grad-dash',
  templateUrl: './grad-dash.component.html',
  styleUrl: './grad-dash.component.css'
})
export class GradDashComponent implements OnInit {

  graduates: any[] = []; // Replace with your actual type

  ngOnInit() {
    this.loadGraduates();
  }

  loadGraduates() {
    // Fetch graduates from the server
  }

  createGraduate() {
    // Open a form to create a new graduate
  }

  editGraduate(graduate: any) {
    // Open a form to edit the graduate
  }

  deleteGraduate(id: number) {
    // Delete the graduate
  }

}
