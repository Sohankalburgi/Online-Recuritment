import { Component } from '@angular/core';

@Component({
  selector: 'app-job-desc',
  templateUrl: './job-desc.component.html',
  styleUrl: './job-desc.component.css'
})
export class JobDescComponent {
  jobs = [
    {
      title: 'International Voice Process Executive',
      company: 'Webvio Technologies pvt ltd',
      rating: '4.4',
      reviews: '58',
      location: 'Kolkata (Rajarhat +1)',
      time: 'Just now'
    },
    {
      title: 'Customer Support Associate - US Voice Process',
      company: '31west Global Services',
      rating: '4.7',
      reviews: '60',
      location: 'Remote',
      time: 'US process i.e. 24*7 rotational shift (including rotational night shift)'
    }
  ];

}
