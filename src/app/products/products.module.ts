import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CartService } from 'src/app/services/cart.service';
import { ProductDetailsModule } from './product-details/product-details.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProductDetailsModule,
    FormsModule
  ]
 // providers: [CartService]
})
export class ProductsModule { }
