import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  isAuthenticated() {
    return this.loggedIn.asObservable();
  }

  // login() {
  //   // Logic for user login
  //   this.loggedIn.next(true); // Set the login status to true
  // }

  // logout() {
  //   // Logic for user logout
  //   this.loggedIn.next(false); // Set the login status to false
  // }

}
