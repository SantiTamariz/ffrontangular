import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MatCardModule } from '@angular/material/card';
import { ProductCardComponent } from './components/product-catalog/product-card/product-card.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ShoppingCardComponent } from './components/shopping-cart/shopping-card/shopping-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewCategoryComponent,
    NewProductComponent,
    ProductCatalogComponent,
    ShoppingCartComponent,
    ProductCardComponent,
    ShoppingCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
