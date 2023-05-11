import { Component } from '@angular/core';
import data from '../assets/data.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cart: any[]=[];
  products: any[]=[];
  categories: any[]=[];
  appData = data;
  total: number = 0;

  title = 'ffrontangular';

  ngOnInit(): void {
    this.categories = this.appData.categories;
    this.products = this.appData.products;
  }

  decreaseFromCart(product: any): void {
    product.quantity -= 1;
    product.stock++;
    const existingProductIndex = this.products.findIndex(
      (p) => p.id === product.id
    );
    if (existingProductIndex >= 0) 
      this.products[existingProductIndex].stock++;

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
    const existingProductIndex = this.products.findIndex(
      (p) => p.id === product.id
    );
    if (existingProductIndex >= 0) 
      this.products[existingProductIndex].stock--;
    product.quantity += 1;
    product.stock -= 1;
    this.total = this.cart.reduce(
      (total: number, product: { price: number; quantity: number }) =>
        total + product.price * product.quantity,
      0
    );
    console.log(product.stock);
  }

  removeFromCart(product: any): void {
    console.log(JSON.stringify(this.cart));
    this.cart = this.cart.filter((item: { id: any }) => item.id !== product.id);
    const existingProductIndex = this.products.findIndex(
      (p) => p.id === product.id
    );
    if (existingProductIndex >= 0) 
      this.products[existingProductIndex].stock+=product.quantity;
    this.total = this.cart.reduce(
      (total: number, product: { price: number; quantity: number }) =>
        total + product.price * product.quantity,
      0
    );
  }

  handlePlaceOrder() {
    this.cart.forEach(element => {
      this.removeFromCart(element);
    });
    this.cart = [];
    this.total = 0;
  }

  addToCart(product: any) {
    const existingProductIndex = this.cart.findIndex(
      (p) => p.id === product.id
    );
    if (existingProductIndex >= 0) {
      this.cart[existingProductIndex].quantity++;
      this.cart[existingProductIndex].stock--;
    } else {
      this.cart.push({ ...product, quantity: 1, stock:product.stock-1 });
    }
    product.stock--;
    this.total = this.cart.reduce(
      (total: number, product: { price: number; quantity: number }) =>
        total + product.price * product.quantity,
      0
    );
  }
}
