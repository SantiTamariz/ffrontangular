import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss']
})
export class ShoppingCardComponent implements OnInit {

  @Input() product: any;
  @Input() removeFromCart: any;
  @Input() decreaseFromCart: any;
  @Input() increaseFromCart: any;

  removeFromCartItem() {
    this.removeFromCart(this.product);
  }

  decreaseFromCartItem() {
    this.decreaseFromCart(this.product);
  }

  increaseFromCartItem() {
    this.increaseFromCart(this.product);
  }

  constructor() { }

  ngOnInit(): void {
  }

}


