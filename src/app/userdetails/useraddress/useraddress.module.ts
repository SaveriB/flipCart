import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseraddressRoutingModule } from './useraddress-routing.module';
import { UseraddressComponent } from './useraddress.component';


@NgModule({
  declarations: [UseraddressComponent],
  imports: [
    CommonModule,
    UseraddressRoutingModule
  ]
})
export class UseraddressModule { }
