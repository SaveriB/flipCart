import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    {
      id:'hgfh634r6734',
    name: 'product A',
    price: '250',
    Desc: 'This Bohemian beach dress was designed to be your go-to summer dress because it will keep you cozy and stylish all day long. It is loose enough to be comfortable without seeming baggy, and it is snug enough to be captivating.',
    size:'',
    imgpath: '../assets/tshirt1.jpg',
   },
   {
     id:'oergtibjdf4763',
    name: 'product B',
    price: '350',
    Desc: 'This Bohemian beach dress was designed to be your go-to summer dress because it will keep you cozy and stylish all day long. It is loose enough to be comfortable without seeming baggy, and it is snug enough to be captivating.',
    size:'',
    imgpath: '../assets/tshirt4.jpg',
   },
   {
     id:'jkfvgoyefu7897',
    name: 'product C',
    price: '150',
    Desc: 'This Bohemian beach dress was designed to be your go-to summer dress because it will keep you cozy and stylish all day long. It is loose enough to be comfortable without seeming baggy, and it is snug enough to be captivating.',
    size:'',
    imgpath: '../assets/tshirt3.jpg',
   },
   {
     id:'vcdhgkj37e627239',
    name: 'product D',
    price: '200',
    Desc: 'This Bohemian beach dress was designed to be your go-to summer dress because it will keep you cozy and stylish all day long. It is loose enough to be comfortable without seeming baggy, and it is snug enough to be captivating.',
    size:'',
    imgpath: '../assets/tshirt4.jpg',
   },
   {
     id:'maewdhef98274',
    name: 'product E',
    price: '300',
    Desc: 'This Bohemian beach dress was designed to be your go-to summer dress because it will keep you cozy and stylish all day long. It is loose enough to be comfortable without seeming baggy, and it is snug enough to be captivating.',
    size:'',
    imgpath: '../assets/tshirt2.jpg',
   },
   {
     id:'awehjhfjb32746874',
    name: 'product F',
    price: '400',
    Desc: 'This Bohemian beach dress was designed to be your go-to summer dress because it will keep you cozy and stylish all day long. It is loose enough to be comfortable without seeming baggy, and it is snug enough to be captivating.',
    size:'',
    imgpath: '../assets/tshirt3.jpg',
   },
   {
     id:'jehbfrjse23746327',
    name: 'product A',
    price: '250',
    Desc: 'This Bohemian beach dress was designed to be your go-to summer dress because it will keep you cozy and stylish all day long. It is loose enough to be comfortable without seeming baggy, and it is snug enough to be captivating.',
    size:'',
    imgpath: '../assets/tshirt1.jpg',
   },
   {
     id:'wegweh2819487',
    name: 'product B',
    price: '350',
    Desc: 'This Bohemian beach dress was designed to be your go-to summer dress because it will keep you cozy and stylish all day long. It is loose enough to be comfortable without seeming baggy, and it is snug enough to be captivating.',
    size:'',
    imgpath: '../assets/tshirt2.jpg',
   },
   {
     id:'sdnfshjgt345',
    name: 'product C',
    price: '150',
    Desc: 'This Bohemian beach dress was designed to be your go-to summer dress because it will keep you cozy and stylish all day long. It is loose enough to be comfortable without seeming baggy, and it is snug enough to be captivating.',
    size:'',
    imgpath: '../assets/tshirt3.jpg',
   },
   {
     id:'bnbvytfuewr817462',
    name: 'product D',
    price: '200',
    Desc: 'This Bohemian beach dress was designed to be your go-to summer dress because it will keep you cozy and stylish all day long. It is loose enough to be comfortable without seeming baggy, and it is snug enough to be captivating.',
    size:'',
    imgpath: '../assets/tshirt4.jpg',
   },
   {
     id:'nhasdkjwhdj392846287346',
    name: 'product E',
    price: '300',
    Desc: 'This Bohemian beach dress was designed to be your go-to summer dress because it will keep you cozy and stylish all day long. It is loose enough to be comfortable without seeming baggy, and it is snug enough to be captivating.',
    size:'',
    imgpath: '../assets/tshirt3.jpg',
   },
   {
     id:'dnbgfhjrguer82934628934',
    name: 'product F',
    price: '400',
    Desc: 'This Bohemian beach dress was designed to be your go-to summer dress because it will keep you cozy and stylish all day long. It is loose enough to be comfortable without seeming baggy, and it is snug enough to be captivating.',
    size:'',
    imgpath: '../assets/tshirt1.jpg',
   },
   {
     id:'2139jgerhj8923',
    name: 'product F',
    price: '400',
    Desc: 'This Bohemian beach dress was designed to be your go-to summer dress because it will keep you cozy and stylish all day long. It is loose enough to be comfortable without seeming baggy, and it is snug enough to be captivating.',
    size:'',
    imgpath: '../assets/tshirt2.jpg',
   }
  
];

  constructor(private http: HttpClient) { }

  getallproducts(): any {
    return this.products;
  }

  addproductinstore(product): Observable<any> {
    console.log('fdughdfughdfghghghghghghghghghgh......',product);
    let _body = product;
    console.log('body : ',_body);
    return this.http.post(environment.Add_Product_In_Store,_body);
  }

}
