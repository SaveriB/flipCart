import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('AuthGuard#canActivate called. state : ', state);
      let returnurl = state.url;
      if(localStorage.getItem('isloggedin')==='true'){
        
        return true;
      }
      else{
        console.log('not logged in.. ');
         this.router.navigate(['login'],{queryParams: {returnUrl : returnurl}});
       // this.router.navigateByUrl("login"); 
        return false;
      }
      
       
      
      
  }
  
}
