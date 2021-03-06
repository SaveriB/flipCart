import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartService } from 'src/app/services/cart.service';
import { HttpClientModule } from '@angular/common/http';
// import { LoginComponent } from './login/login.component';
import {FormsModule,  ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,  ReactiveFormsModule
  ],
 // providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
