import { Component, OnInit } from '@angular/core';
import { Appointment } from '../not-scheduled/Model/Appointment.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../ServiceAuth/auth-service.service';
import { StatusappointService } from '../statusappoint/services/statusappoint.service';

@Component({
  selector: 'app-rejectedappoint',
  templateUrl: './rejectedappoint.component.html',
  styleUrl: './rejectedappoint.component.css'
})
export class RejectedappointComponent implements OnInit {
  selectedAppoint: any=null;
  flag = false;
  
  filteredAppointments: Appointment[] = [];
  searchTerm: string = '';
  appoints: any[]=[];
  selectedStudent : any =null;
  
    roleIdString: string|null = null;
  
    constructor(private route: Router,private router:ActivatedRoute,private authService:AuthServiceService,
      private appointservice:StatusappointService
    ){}
  
    ngOnInit(): void {
      this.router.paramMap.subscribe(params=>{
        this.roleIdString = params.get('roleIdString');
        console.log('RoleIdString:',this.roleIdString);
      });
      this.fetchappointments();
    }
  
   
  
    fetchappointments(): void {
      this.appointservice.getallrejected(this.roleIdString).subscribe(data => {
        this.appoints = data;
        
        console.log(this.filteredAppointments)
        console.log(this.roleIdString);
        console.log(data);
      });
    }
    
    post(){
      console.log(this.roleIdString);
      if (this.roleIdString === 'null' || this.roleIdString === null) {
        alert('Please login As Employer');
      } else {
        this.route.navigate([`/job-register/${this.roleIdString}`]);
      }
    }
  
    infobutton(appoint: any) {
      console.log(appoint)
      this.selectedAppoint = appoint;
      this.flag=true;
      }
  
    closeModal():void{
        this.selectedAppoint = null;
        this.flag = false;
      }
   
  
    postappoint() {
      console.log(this.roleIdString);
      if (this.roleIdString === 'null' || this.roleIdString === null) {
        alert('Please login As Employer');
      } else {
        this.route.navigate([`/emp-home-page/${this.roleIdString}`]);
      }
      }
  
    jobsforyou(){
      console.log(this.roleIdString);
      this.route.navigate([`/gradhome/${this.roleIdString}`])
    }
  
    logout(){
      this.authService.logout();
    }
  
    home(){
      if(this.roleIdString?.startsWith('EMP')){
        this.route.navigate([`/home/${this.roleIdString}`])
      }
      else{
        this.route.navigate([`/gradhome/${this.roleIdString}`])
      }
    }
}
