import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {
  @Input() products: any[] = [];
  @Input() categories: any[] = [];
  @Output() addToCart: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    console.log("categorias: "+JSON.stringify(this.categories));
    this.categories.forEach((category) => {
      category.visible = false; // Initialize the visibility state for each category
    });
  }

  toggleCategory(category: any): void {
    category.visible = !category.visible; // Toggle the visibility state of the category
  }

  handleAddToCart(product: any){
    this.addToCart.emit(product);
  }
}
