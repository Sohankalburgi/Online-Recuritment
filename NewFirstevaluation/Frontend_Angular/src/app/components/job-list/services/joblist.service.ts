import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JoblistService {
  url = "http://localhost:4200/joblist";

  constructor(private http: HttpClient) { }

  joblist() {
    return this.http.get(this.url);
  }
}
