import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../Message/Message.model';


@Injectable({
  providedIn: 'root'
})
export class AdmininboxserviceService {

  baseUrl = "http://localhost:8080";
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAllinbox():Observable<Message[]>{
    return this.http.get<Message[]>(`${this.baseUrl}/getInboxforadmin`);
  }

  sendtograd(message:Message):Observable<any>{
    let s = message.senderId;
    message.senderId = message.receiverId;
    message.receiverId = s;
    console.log(message.senderId)
    console.log(message.receiverId)
    console.log(message.message)
    console.log(message)
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/sendtograd`,message,this.httpOptions);
  }

  deleteMessage(id:any):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/deletemessage/${id}`);
  }
}
