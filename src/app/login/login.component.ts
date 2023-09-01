import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginform!:FormGroup;
isnewUser:boolean=false;
constructor(private fb:FormBuilder,private loginsvc:LoginserviceService,private http:HttpService,private router:Router){
  
}
ngOnInit(){
  this.login();
}
login(){
  this.loginform=this.fb.group({
    'email':['',[Validators.required]],
    'password':['',[Validators.required]]
  })


}
onlogin(){
  // console.log("login initiated");
  
 console.log(this.loginform.value);
 const endPoint= "users?email="+this.loginform.value.email+ "&&password="+ this.loginform.value.password;
  this.http.getDataToServer(endPoint).subscribe((el:any)=>{
    // console.log(" login success");
    this.loginsvc.setLoggedIn(true);
   if(el && el.length >0){
    this.isnewUser=false;
    this.router.navigate(['/home']);
   }else{
    this.isnewUser=true;
   }
  })
}
}
// function setLoggedIn() {
//   throw new Error('Function not implemented.');
// }

