import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './features/products/components/products/products.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ProductsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
