import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent implements OnInit{
    
    appointForm!:FormGroup;

    constructor(private fb:FormBuilder){
      this.appointForm = this.fb.group({

      })
    }

    ngOnInit(): void {
     
    }

}
