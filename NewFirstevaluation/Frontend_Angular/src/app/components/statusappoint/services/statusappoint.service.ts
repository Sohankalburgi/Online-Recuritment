import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../../not-scheduled/Model/Appointment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusappointService {
  baseUrl = "http://localhost:8080";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http:HttpClient) { }

  getallapplication(roleId:any):Observable<Appointment[]>{
    console.log(roleId+"this is service")
    return this.http.get<Appointment[]>(`${this.baseUrl}/getAppointmentpending/${roleId}`)
  }

  getallapplicationaccepted(roleId:any):Observable<Appointment[]>{
    console.log("accepted")
    return this.http.get<Appointment[]>(`${this.baseUrl}/acceptappoint/${roleId}`);
  }

  getallrejected(roleId:any):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.baseUrl}/rejectedappointment/${roleId}`)
  }
}
