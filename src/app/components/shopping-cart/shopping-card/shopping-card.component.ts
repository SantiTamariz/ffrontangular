import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss']
})
export class ShoppingCardComponent implements OnInit {

  @Input() product: any;
  @Output() decreaseFromCart: EventEmitter<any> = new EventEmitter<any>();
  @Output() increaseFromCart: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeFromCart: EventEmitter<any> = new EventEmitter<any>();

  removeFromCartItem() {
    this.removeFromCart.emit(this.product);
  }

  decreaseFromCartItem() {
    this.decreaseFromCart.emit(this.product);
  }

  increaseFromCartItem() {
    this.increaseFromCart.emit(this.product);
  }

  constructor() { }

  ngOnInit(): void {
  }

}


