import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  //  subject$=new BehaviorSubject(9);
  subject$=new Subject();
 
obs$=this.subject$.asObservable();
  

sendData(count:number){
this.subject$.next(count)
}
}