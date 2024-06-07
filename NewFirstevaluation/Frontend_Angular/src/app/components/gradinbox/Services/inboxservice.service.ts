import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../../not-scheduled/Model/Appointment.model';
import { Message } from '../../gradmessage/Model/Message.model';

@Injectable({
  providedIn: 'root'
})
export class InboxserviceService {


  baseUrl = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  getAllinbox(roleId:any):Observable<Message[]>{
    return this.http.get<Message[]>(`${this.baseUrl}/getInbox/${roleId}`);
  }
  deleteMessage(id:any):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/deletemessage/${id}`);
  }
}
