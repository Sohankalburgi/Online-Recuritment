import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router:Router){}
  logout() {
    this.clearStorage();
    this.router.navigateByUrl('/login', { replaceUrl: true }).then(() => {
      // Manipulate history after navigation is complete
      history.pushState(null, '', window.location.href);
      window.addEventListener('popstate', this.preventBackNavigation);
    });
  }

  clearStorage() {
    localStorage.clear();
    sessionStorage.clear();

  }



  preventBackNavigation = (event: PopStateEvent) => {
    history.pushState(null, '', window.location.href);
    this.router.navigateByUrl('/login', { replaceUrl: true });
  };
}
