import { Component } from '@angular/core';
import { ProdViewComponent } from './prod-view/prod-view.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../css/shop-homepage.css']
})
export class AppComponent {
  title = 'app';
  prodview : ProdViewComponent;
}
