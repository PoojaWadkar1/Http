import { Injectable, InjectionToken } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginserviceService } from './loginservice.service';

@Injectable({
  providedIn:'root'
})

export class authGuard implements CanActivate {
  constructor(private login:LoginserviceService, private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // alert('Please Login First') 
    if(this.login.isUserLoggedIn()){
      return true;
    }else{
      alert('Please login first');
      this.router.navigate(['/login'])
      return false
    }
//     if(this.login.isUserLogged()){
// return true;
//     }else{
//       alert('please logIn first ');
//       this.router.navigate(['/login'])
//       return false;
//     }
  }
  

};
