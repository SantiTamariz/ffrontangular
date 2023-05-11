import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showNewCategory() {
    // Add your logic here for showing the new category modal
  }

  showNewProduct() {
    // Add your logic here for showing the new product modal
  }

}
