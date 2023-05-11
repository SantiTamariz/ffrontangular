import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
//import { CartService } from '../../shopping-cart/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  @Output() addToCart: EventEmitter<any> = new EventEmitter<any>();


  handleAddToCart(): void {
    this.addToCart.emit(this.product);
  }

  ngOnInit(): void {
  }

}
