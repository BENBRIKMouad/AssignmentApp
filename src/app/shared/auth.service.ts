import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = false;
  constructor() { }
  logIn(){
    this.loggedIn = true;
  }
  logOut(){
    this.loggedIn = false;
  }
  isAdmin(){
    const isAdmin = new Promise((resolve,reject)=>{
      resolve(this.loggedIn)
    });
    return isAdmin;
  }
}
