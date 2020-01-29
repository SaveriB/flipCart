import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform: FormGroup;
  submitted = false;
  formValue: User;

  constructor(private fb: FormBuilder, private loginservice: LoginService, private router: Router) { }

  ngOnInit() {

    this.signupform = this.fb.group({
      name : new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
      emailid : new FormControl('',[Validators.required,Validators.email]),
      userid : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
      password : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
      cnfpassword : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
      contactno : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),

    });
    console.log(this.signupform.controls)
  }

  get f() { return this.signupform.controls; }

  signup() {
    this.submitted = true;
    console.log('signup clicked...');
    if(this.signupform.invalid){
      console.log('sign up clicked as invalid...',this.signupform.errors);
      return;
    }
    else{
      this.formValue = this.signupform.value;
      let user = {
        name: this.formValue.name,
        userid: this.formValue.userid,
        password: this.formValue.password,
        email: this.formValue.email,
        contactno: this.formValue.contactno
      }
      this.loginservice.signup(user);
      this.router.navigate(['/login']);
    }

  }

}
