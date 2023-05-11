import { Component, Input, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input() cart: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {
    this.cart = [];
  }

  ngOnInit(): void {
    this.cartService.cart$.subscribe((cart) => {
      console.log("el de this"+JSON.stringify(this.cart));
      this.cart = cart;
      this.total = this.cart.reduce(
        (total: number, product: { price: number; quantity: number }) =>
          total + product.price * product.quantity,
        0
      );
    });
  }

  handlePlaceOrder() {
    this.cart = [];
  }

  decreaseFromCart(product: any): void {
    product.quantity -= 1;
    product.stock += 1;

    if (product.quantity === 0) {
      this.removeFromCart(product);
    } else {
      this.total = this.cart.reduce(
        (total: number, product: { price: number; quantity: number }) =>
          total + product.price * product.quantity,
        0
      );
    }
  }

  increaseFromCart(product: any): void {
    console.log(JSON.stringify(this.cartService.cart));
    product.quantity += 1;
    product.stock -= 1;
    this.total = this.cart.reduce(
      (total: number, product: { price: number; quantity: number }) =>
        total + product.price * product.quantity,
      0
    );
  }

  removeFromCart(product: any): void {
    console.log(JSON.stringify(this.cart));
    this.cart = this.cart.filter((item: { id: any }) => item.id !== product.id);
    product.stock += product.quantity;
    this.total = this.cart.reduce(
      (total: number, product: { price: number; quantity: number }) =>
        total + product.price * product.quantity,
      0
    );
  }
}
