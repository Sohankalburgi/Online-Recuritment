import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  generateOtp(email: string): Observable<any> {
    console.log("generation is called");
    console.log(email);
    return this.http.post(`${this.apiUrl}/generate-otp/${email}`,{});
  }

  verifyOtp(email: string, otp: string): Observable<any> {
    
    return this.http.post(`${this.apiUrl}/verify-otp/${email}/${otp}`,{});
  }
}
