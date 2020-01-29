import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  addprodform: FormGroup;
  constructor(private fb: FormBuilder, private productservice: ProductService) { }


  ngOnInit() {
    this.addprodform = this.fb.group({
      productname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
      productdesc: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      productprice: new FormControl('', Validators.required),
      productquantity: new FormControl('', Validators.required)
    });
  }

  save() {
    console.log('form data : ', this.addprodform.value);
    let product = this.addprodform.value;
    this.productservice.addproductinstore(product).subscribe(data => {
      console.log(data);
    },
      err => {
        console.log(err);
      })

  }

}
