import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {FormsModule,  ReactiveFormsModule} from '@angular/forms';
// import { SignupComponent } from 'src/app/login/signup/signup.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,FormsModule,  ReactiveFormsModule
  ]
})
export class LoginModule { }
