import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { HomeComponent } from './components/home/home.component';
import { LoginSuccessComponent } from './components/login-success/login-success.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { EmpLoginComponent } from './components/emp-login/emp-login.component';
import { EmpRegisterComponent } from './components/emp-register/emp-register.component';
import { StudLoginComponent } from './components/stud-login/stud-login.component';
import { StudRegisterComponent } from './components/stud-register/stud-register.component';
import { JobSeekerComponent } from './components/job-seeker/job-seeker.component';
import { JobRegisterComponent } from './components/job-register/job-register.component';
import { JobdescriptionComponent } from './jobdescription/jobdescription.component';
import { JoblistComponent } from './joblist/joblist.component';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: 'home/:roleIdString',
    component: HomeComponent,
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path: 'login-success',
    component: LoginSuccessComponent,
  },
  {
    path: 'email',
    component:EmailVerificationComponent
  },

  {
    path: 'job-seeker',
    component: JobSeekerComponent
  },

  {
    path: 'job-register/:roleIdString',
    component: JobRegisterComponent

  },

  {
    path:'',
    redirectTo: '/home', pathMatch: 'full',
  },
  {
    path: 'stud-register/:roleIdString',
    component: StudRegisterComponent
  },

  {
    path: 'emp-register/:roleIdString',
    component:EmpRegisterComponent
  },

  {
    path:'appointment',
    component:AppointmentComponent
  },
  {
    path:'jobdescription/:roleIdString/:jobId',
    component:JobdescriptionComponent
  },
  {
    path:'jobsearch',
    component:JoblistComponent
  },
  {
    path:'jobsearch/:roleIdString',
    component:JoblistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
