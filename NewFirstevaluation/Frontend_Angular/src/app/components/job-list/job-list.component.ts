import { Component } from '@angular/core';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {
applyJob(_t22: any) {
throw new Error('Method not implemented.');
}
  searchText: string = '';
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Another Item', 'Something Else'];
jobs: any;

  clearSearch() {
    this.searchText = '';
  }
}
