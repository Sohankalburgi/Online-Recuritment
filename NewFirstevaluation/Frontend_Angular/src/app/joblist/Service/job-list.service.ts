import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobListService {

  url = "http://localhost:8080/jobBysearch";

  constructor(private http: HttpClient) { }

  joblistsearch(search:string) {
    return this.http.get(`${this.url}/${search}`);
  }
}
