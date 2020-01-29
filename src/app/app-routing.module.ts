import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LoginComponent } from 'src/app/login/login.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path:'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  { path: 'customer-list', 
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
  },
  { path: 'order-list', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'product-list', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'mycart',  loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'checkout',  canActivate : [AuthGuard],
   loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule),
   },
  { path: 'user', loadChildren: () => import('./userdetails/userdetails.module').then(m => m.UserdetailsModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
