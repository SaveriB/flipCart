import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'customer-app';
  cartItemCount = 0;
  cartItems : Product[];

  constructor (private cartService : CartService) {}

  ngOnInit() {
    this.cartService.addedTocart.subscribe(res => {
      console.log('my cart contains .. ', res);
      this.cartItemCount = this.cartItemCount +1;
      
     // this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
     // console.log('.........................',this.cartItems.length);
      //this.cartItemCount =this.cartItems.length;
    }, err => {
      console.log('error happened while adding');
    });
    this.cartService.removedFromCart.subscribe(res => {
      this.cartItemCount = this.cartItemCount -1;
    }, err => {
      console.log('error happened while removing');
    })
  }
}
