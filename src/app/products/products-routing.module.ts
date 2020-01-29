import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';

const routes: Routes = [{ path: '', component: ProductsComponent }
//  { path: 'product-details/:id', 
//  loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsModule)
//  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
