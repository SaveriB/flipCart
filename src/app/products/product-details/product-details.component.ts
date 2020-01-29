import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  addedtocart = false;
  sizeselected = false;
  selectedsize = '';
  submitted = false;
  quantity=1;
@Input() product : Product;
@Output() closing = new EventEmitter(); 
  constructor(private route: ActivatedRoute,private router:Router, private cartservice: CartService) { 
  
  }

  ngOnInit() {
    this.sizeselected = false;
  
    console.log('products....',this.product);
  }

  selectsize(size){
    console.log(size);
    this.product.size = size;
    this.sizeselected = true;
  }

  addtocart(product) {
    this.product.quantity=this.quantity;
    this.submitted = true;   
    if(this.sizeselected){
      this.addedtocart = true;
      console.log(this.product);
      this.cartservice.addtocart(this.product);
    }
    
  }
  closedetails() {
    this.addedtocart = false;
    this.selectedsize = '';
    this.sizeselected = false;
    this.submitted = false;  
    this.closing.emit('emitted');
  }
goToCart(){
  this.router.navigate(['/mycart'])
}
}
