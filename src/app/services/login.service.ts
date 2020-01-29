import { Injectable } from '@angular/core';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: User[] =[];

  constructor() { }

  login(user) {
    localStorage.setItem('isloggedin','true');
   
   // console.log(this.users);
  }
  signup(user) {
    this.users.push(user);
    console.log('no of users signed up..', this.users.length);
  }
  getUserDetails (userid): any{
    this.users.forEach(element => {
      if(element.userid === userid){
        console.log('in login service',element);
        return element;
      }
     else{
       return null;
     }
    });
  }
}
