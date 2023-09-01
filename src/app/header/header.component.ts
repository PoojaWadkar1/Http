import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  counterValue:number=0;
constructor(private router:Router, private shared:SharedService){

}
asynCount!:Observable<any>
// subScription!:Subscription;
ngOnInit(){
  // this.counterValue=this.shared.addToCart();
  // this.subScription=this.shared.obs$.subscribe(
  //   (el:any)=>{
  //   this.counterValue=el;
  // })

  this.asynCount=this.shared.obs$;
  console.log('header counter',this.counterValue++);
}
  logout(){
this.router.navigate(['/login'])
  }
  
  // ngOnDestroy(){
  //   this.subScription.unsubscribe();
  // }
}
