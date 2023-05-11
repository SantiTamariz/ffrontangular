import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any[] = [];

  constructor() { }

  addToCart(product: any): void {
    const existingProductIndex = this.cart.findIndex(
      (p) => p.id === product.id
    );
    if (existingProductIndex >= 0) {
      this.cart[existingProductIndex].quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    console.log(JSON.stringify(this.cart));
  }
}
