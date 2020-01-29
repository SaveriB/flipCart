import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartItems : Product[]=[];
  constructor(private cartService : CartService) { }

  ngOnInit() {
    // this.cartService.addedTocart.subscribe(res => {
    //   //console.log('my cart contains .. ', res, this.cartItems);
    //   this.cartItems.push(res);
    // }, err => {
    //   console.log('error happened');
    // })
  //   this.cartService.getcartitems().subscribe(res => {
  //     console.log('cart items : ',res);
  //   },
  // err=> {
  //   console.log('cart items.....',err);
  // })

  this.cartItems = this.cartService.getcartitems();
  console.log('cart items..',this.cartItems);
  // this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
  // console.log('my cart contains .. ',this.cartItems);
  }

  getpricedetails() {
    
  }

  removefromcart(item,index) {
    console.log('removing cart items..',item,index);
    this.cartService.removefromcart(item,index);
   
  }
 
}
