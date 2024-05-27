import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employer, User } from '../Model/Employer.model';

@Injectable({
  providedIn: 'root'
})
export class EmployerserviceService {

  baseUrl = "http://localhost:8080";
  
  constructor(private http:HttpClient) { }

  getListOfEmployer():Observable<Employer[]>{
    return this.http.get<Employer[]>(`${this.baseUrl}/allemployer`);
  }
  getUserbyroleId(roleId:string):Observable<any>{
    return this.http.get<User>(`${this.baseUrl}/getUserbyRoleId/${roleId}`);
  }
}
