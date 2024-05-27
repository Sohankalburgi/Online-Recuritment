import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { College, Graduate, User } from '../Models/graduate.model';

@Injectable({
  providedIn: 'root'
})
export class GraduateserviceService {
 

  baseUrl = "http://localhost:8080";
  
  constructor(private http:HttpClient) { }

  getListOfGraduates():Observable<Graduate[]>{
    return this.http.get<Graduate[]>(`${this.baseUrl}/allgraduate`)
  }

  getUserbyroleId(roleId:string):Observable<any>{
    return this.http.get<User>(`${this.baseUrl}/getUserbyRoleId/${roleId}`);
  }

  getCollegeByroleId(roleId: string):Observable<any> {
      return this.http.get<College>(`${this.baseUrl}/college/${roleId}`);
  }

}
