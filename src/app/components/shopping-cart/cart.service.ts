import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any[] = [];
  cart$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.cart);

  constructor() {}

  addToCart(product: any): void {
    const existingProductIndex = this.cart.findIndex(
      (p) => p.id === product.id
    );
    if (existingProductIndex >= 0) {
      this.cart[existingProductIndex].quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.cart$.next(this.cart);
    //console.log(JSON.stringify(this.cart));
  }
}
