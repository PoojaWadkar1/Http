import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class canConfirmguardGuard implements CanDeactivate<unknown> {
  
  constructor(){

  }
  
  canDeactivate(component:  Ideactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean  {
    return component.isExit();
  }
  

};
 export interface Ideactivate{
  isExit():boolean
 }