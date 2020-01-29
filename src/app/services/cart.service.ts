import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from 'src/app/models/product.model';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  addedTocart = new Subject();
  removedFromCart = new Subject();
  cartItems: Product[] = [];

  httpOptions : any = new HttpHeaders({
    'Content-Type' : 'application-json'
  });

  constructor(private httpService : HttpClient) { }

  addtocart(product){
    this.addedTocart.next(product);
    this.cartItems.push(product);
   // localStorage.setItem('cartItems',JSON.stringify(this.cartItems));
  //  return this.cartItems;
   // return this.addedTocart.asObservable;
    // return this.httpService.post('../assets/cartItems.json',product,this.httpOptions);
  }
  getcartitems(): any{
    return this.cartItems;
  }

  removefromcart(item,index) {
    console.log('now my cart has ..',this.cartItems);
    this.removedFromCart.next(index);
    this.cartItems.splice(index,1);
  }

  // getcartitems(): Observable<any>{
  //   return this.httpService.get('../assets/cartItems.json',this.httpOptions);
  // }


  // postToJSON() {
  //   return this.httpService.post();
  // }
}
