import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getProducts(): Observable<IProduct[]> {
    return of([
      {
        id: '1',
        name: 'White T-shirt',
        price: 19.99,
        description: 'Basic white T-shirt',
      },
      {
        id: '2',
        name: 'Grey T-shirt',
        price: 14.99,
        description: 'Basic grey T-shirt',
      },
      {
        id: '3',
        name: 'Black T-shirt',
        price: 20.99,
        description: 'Basic black T-shirt',
      },
    ]);
  }
}
