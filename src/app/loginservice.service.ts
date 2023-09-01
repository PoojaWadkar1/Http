import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor() { }
  loginUser:boolean=false;

  isUserLoggedIn(){
   return this.loginUser;
  }
  setLoggedIn(flag:boolean){
    this.loginUser=flag;
  }
//   constructor(){

//   }
//   loggedUser:boolean=false;
//   isUserLogged(){
//     return this.loggedUser;
//   }
//   setLoggedIn(flag:boolean){
//  this.loggedUser=flag;
//   }
}
