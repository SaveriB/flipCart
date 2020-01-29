import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform :FormGroup;
  userdetails: User;
  returnurl;

  constructor(private fb : FormBuilder, private loginservice : LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loginform = this.fb.group({
      userid : new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      password : new FormControl('',Validators.required)
    });
  }

  login() {
    console.log(this.loginform.value);  
    console.log(this.loginform.controls); 
    this.loginservice.login(this.loginform.value) ;
    this.userdetails = this.loginservice.getUserDetails(this.loginform.value.userid);
    //if(this.loginform.value.password == this.userdetails.password){
      this.returnurl = this.route.snapshot.queryParams['returnUrl'] || '/';
      this.router.navigateByUrl(this.returnurl);
   // }
  }

}
