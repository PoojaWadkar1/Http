import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { AsyncSubject, ReplaySubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
// replaySubject=new ReplaySubject();
asyncSubject=new AsyncSubject();
  constructor(private shared:SharedService){

  }
 counter:number=0; 
Increment(){
   console.log("counter",this.counter);
  
this.counter++;
this.shared.sendData(this.counter)
}
ngOnInit(){
  // this.replaySubject.next(1);
  // this.replaySubject.next(2);
  
  // this.replaySubject.subscribe((el:any)=>{
  //   console.log(el);
    
  // })
  // this.replaySubject.next(3);
  // this.replaySubject.next(4);
  // this.replaySubject.subscribe((el:any)=>{
  //   console.log(el);
    
  // })
  this.asyncSubject.next(1);
  // this.asyncSubject.complete();
  this.asyncSubject.next(2);
  this.asyncSubject.complete();
  this.asyncSubject.subscribe((el:any)=>{
    console.log(el);
    
  })
this.asyncSubject.next(3);

this.asyncSubject.next(4);


}


}
