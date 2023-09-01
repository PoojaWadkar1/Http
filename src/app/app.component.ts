import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Http';
router:Router;
  constructor(acroute:ActivatedRoute,router:Router){
this.router=router;
console.log("router",router);
console.log("acroute",acroute);
 sessionStorage.setItem('name','pooja')

  }
}
