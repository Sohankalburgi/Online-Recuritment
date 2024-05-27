import { Component, OnInit} from '@angular/core';
import { EmployerserviceService } from './Services/employerservice.service';

@Component({
  selector: 'app-emp-dash',
  templateUrl: './emp-dash.component.html',
  styleUrl: './emp-dash.component.css'
})
export class EmpDashComponent implements OnInit {

  selectedEmployer:any = null;

  employers: any[] = []; // Replace with your actual type

  constructor(private employerservice:EmployerserviceService){}

  ngOnInit() {
    this.loadEmployers();
  }


  loadEmployers() {
    // Fetch employers from the server
    this.employerservice.getListOfEmployer().subscribe(data=>{
      this.employers = data;
      this.employers.forEach(i=>{
        this.employerservice.getUserbyroleId(i.roleId.roleId).subscribe(user=>{
          i.user = user;
        })
      })
      console.log(this.employers)
    })
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

  infoEmployer(employer:any){
    this.selectedEmployer = employer
  }

  closeModal():void{
    this.selectedEmployer = null;
  }
  
}
