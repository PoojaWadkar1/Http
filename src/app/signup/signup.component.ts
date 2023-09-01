import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpService) {}
  ngOnInit() {
    this.createsignup();
  }
  createsignup() {
    this.signupForm = this.fb.group({
      name: [''],
      mobile: [''],
      email: [''],
      password: [''],
    });
  }
  signup() {
    console.log(this.signupForm.value);
    this.http.postDataToServer('users', this.signupForm.value).subscribe(
      (response) => {
        console.log(response);
      },
      () => {},
      () => {}
    );
  }
}

