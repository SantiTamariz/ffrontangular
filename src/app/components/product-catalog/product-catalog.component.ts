import { Component, OnInit } from '@angular/core';
import data from '../../../assets/data.json';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {
  appData = data;

  constructor() {}

  ngOnInit(): void {
    this.appData.categories.forEach((category) => {
      category.visible = false; // Initialize the visibility state for each category
    });
  }

  toggleCategory(category: any): void {
    category.visible = !category.visible; // Toggle the visibility state of the category
  }
}
