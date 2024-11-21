import { Injectable } from '@angular/core';
import { Iproducts } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] = [
    { id: 1, name: 'Nike Air Max 90', price: 50.0, description: 'Nike Shoes', image: '../image.png'},
    { id: 2, name: 'Nike Air Force 270', price: 60.0, description: 'Nike Shoes', image: '../image.png' },
    { id: 3, name: 'Nike Air Force', price: 40.0, description: 'Nike Shoes', image: '../image.png' }
  ];
  getProducts(): Iproducts[] {
    return this.products;
  }
}