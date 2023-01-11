import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  products$: Observable<IProduct[]>;

  ngOnInit() {
    this.products$ = this.getProducts();
  }

  getProducts(): Observable<IProduct[]> {
    return this.productsService.getProducts();
  }
}
