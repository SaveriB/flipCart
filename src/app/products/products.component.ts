import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allproducts =[];
  productD : Product;
  showmodal=false;
  sizeselected = false;

  constructor(private carService : CartService,private productservice: ProductService, private router: Router) { }

  ngOnInit() {
    this.allproducts = this.productservice.getallproducts();
  }
  showproduct(product) {
    this.showmodal = true;
    this.productD = product;
  }

  selectsize(size){
    console.log(size);
   // this.product.size = size;
    this.sizeselected = true;
  }

  addtocart(product) {
    this.carService.addtocart(product);
  //   .subscribe(res=> {
  //     console.log('res...',res);
  //   },
  // err=> {
  //   console.log('err .....',err);
  // })
    //addedTocart.next(prodName);
  }
  productdetailsclosed (event) {
    console.log(event.target);
  }

}
