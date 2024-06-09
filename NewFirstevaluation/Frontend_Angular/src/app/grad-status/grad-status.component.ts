import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grad-status',
  templateUrl: './grad-status.component.html',
  styleUrls: ['./grad-status.component.css']
})
export class GradStatusComponent {
  selectedSection: string = '';

  constructor(private router: Router) {}

  selectSection(section: string) {
    this.selectedSection = section;
    switch (section) {
      case 'pending':
        this.router.navigate(['/grad-pending']);
        break;
      case 'scheduled':
        this.router.navigate(['/grad-sched']);
        break;
      case 'applied':
        this.router.navigate(['/grad-applied']);
        break;
      default:
        break;
    }
  }
}
