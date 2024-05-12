import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JobSearchComponent } from './components/job-search/job-search.component';
import { LoginSuccessComponent } from './components/login-success/login-success.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { EmailService } from './email.service';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { EmpLoginComponent } from './components/emp-login/emp-login.component';
import { EmpRegisterComponent } from './components/emp-register/emp-register.component';
import { StudLoginComponent } from './components/stud-login/stud-login.component';
import { StudRegisterComponent } from './components/stud-register/stud-register.component';
import { JobSeekerComponent } from './components/job-seeker/job-seeker.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { FilterPipe } from './components/job-list/filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotpasswordComponent,
    HomeComponent,
    JobSearchComponent,
    LoginSuccessComponent,
    EmailVerificationComponent,
    AppointmentComponent,
    EmpLoginComponent,
    EmpRegisterComponent,
    StudLoginComponent,
    StudRegisterComponent,
    JobSeekerComponent,
    JobListComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
