import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-prod-view',
  templateUrl: './prod-view.component.html',
  styleUrls: ['./prod-view.component.css']
})
export class ProdViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('this is prod-view');
  }

  products = [ new ProductComponent(1,'Korres')];

}
