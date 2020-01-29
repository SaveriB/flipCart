import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,FormsModule,  ReactiveFormsModule
  ],
  providers: [ProductService]
})
export class AdminModule { }
