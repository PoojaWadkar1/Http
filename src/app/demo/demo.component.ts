import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import{ HttpService}from '../services/http.service'
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  demoForm!:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpService){

  }

  ngOnInit(){
this.create();
  }
  create(){
    this.demoForm=this.fb.group({
      'name':[''],
      "mobile":['']
    })
  }

  save(){
    console.log(this.demoForm.value);
   this.http.postdata('users',this.demoForm.value).subscribe(
    (el)=>{
      console.log(el);
      
    },
    ()=>{

    },
    ()=>{

    })
  }
}

