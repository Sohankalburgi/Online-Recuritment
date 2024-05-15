import { Component } from '@angular/core';
import { JobListService } from './Service/job-list.service';
import { HttpClient } from '@angular/common/http';
import { jobList } from './Model/jobList.model';
import { FormControl, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrl: './joblist.component.css'
})
export class JoblistComponent {

  searchValue!:string;
  jobs:jobList[] = [];
  roleIdString: string | null = null;

  constructor(private http: HttpClient,private joblistservice:JobListService,private router:ActivatedRoute
    ,private route:Router
  ) { }
  ngOnInit(): void {
    this.router.paramMap.subscribe(params=>{
      this.roleIdString = params.get('roleIdString');
      console.log('RoleIdString:',this.roleIdString);
    });
  }
  getCompaniesForJobs() {
    this.jobs.forEach(job => {
        this.joblistservice.getCompanyByRoleId(job.roleId.roleId).subscribe(company => {
            // Assign company details to respective job
            job.companyName = company.companyName;
            job.companyAddress = company.companyAddress;
        });
    });

  }

  search(){
    this.joblistservice.getJobs(this.searchValue).subscribe(jobs=>{
    this.jobs = jobs;
    this.getCompaniesForJobs();}
   );
  }

  Apply(jobId:number){
    if(this.roleIdString==null){
      alert("Please Login to apply")
      this.route.navigate(['/login']);
    }
    else{
      this.route.navigate([`/jobdescription/${this.roleIdString}/${jobId}`]);
    }
  }
}