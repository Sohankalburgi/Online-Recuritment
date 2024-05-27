import { Component, OnInit} from '@angular/core';
import { GraduateserviceService } from './Services/graduateservice.service';

@Component({
  selector: 'app-grad-dash',
  templateUrl: './grad-dash.component.html',
  styleUrl: './grad-dash.component.css'
})
export class GradDashComponent implements OnInit {

  selectedGraduate: any = null;
  selectedGraduateforedit: any = null;

  graduates: any[] = []; // Replace with your actual type

  constructor(private graduateservice:GraduateserviceService){}

  ngOnInit() {
    this.loadGraduates();
  }

  loadGraduates() {
    // Fetch graduates from the server
    this.graduateservice.getListOfGraduates().subscribe(data=>{
      this.graduates = data;
      this.graduates.forEach(i=>{
        this.graduateservice.getUserbyroleId(i.roleId.roleId).subscribe(user=>{
          i.user = user;
        }
      )
      this.graduateservice.getCollegeByroleId(i.roleId.roleId).subscribe(college=>{
        i.college = college;
      })
      })
      console.log(this.graduates)
    })
  }

  createGraduate() {
    // Open a form to create a new graduate
  }

  editGraduate(graduate: any) {
    // Open a form to edit the graduate
    this.selectedGraduateforedit = graduate;
  }

  deleteGraduate(id: number) {
    // Delete the graduate
  }

  infoGradute(graduate: any) {
    this.selectedGraduate = graduate;
    
  }

  closeModal():void{
    this.selectedGraduate = null;
    
  }
  closeModalforEdit():void{
    this.selectedGraduateforedit = null;
  }

}
