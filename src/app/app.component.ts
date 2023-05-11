import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cart: any[]=[];
  products: any[]=[];
  categories: any[]=[];

  title = 'ffrontangular';
}
