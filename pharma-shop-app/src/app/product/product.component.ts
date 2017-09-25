import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productid:  number;
  prodname: string;

  constructor(id: number,name: string) {
    this.productid = id;
    this.prodname = name;
  }

  ngOnInit() {
  }


}
