import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input() cart: any[] = [];
  @Output() decreaseFromCart: EventEmitter<any> = new EventEmitter<any>();
  @Output() increaseFromCart: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeFromCart: EventEmitter<any> = new EventEmitter<any>();
  @Input() handlePlaceOrder: any;
  @Input() total: any;


  constructor(private cartService: CartService) {
    this.cart = [];
  }

  ngOnInit(): void {
    console.log("antes de nada cart: "+JSON.stringify(this.cart));
  }

  /*
      this.cartService.cart$.subscribe((cart) => {
      this.cart = cart;
      this.total = this.cart.reduce(
        (total: number, product: { price: number; quantity: number }) =>
          total + product.price * product.quantity,
        0
      );
    });
  */

  handlePlaceOrderItem() {
    this.handlePlaceOrder();
  }

  decreaseFromCartItem(product: any): void {
    this.decreaseFromCart.emit(product);
  }

  increaseFromCartItem(product: any): void {
    this.increaseFromCart.emit(product);
  }

  removeFromCartItem(product: any): void {
    this.removeFromCart.emit(product);
  }
}
