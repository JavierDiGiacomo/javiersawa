import { Injectable } from '@angular/core';
import { IProduct } from './elements';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //urlProducts = 'http://localhost:3000/locations';
  //urlProducts = 'https://6f800b8bb10840b1830d9176121a0f9a.api.mockbin.io/products';

  urlProducts = 'https://dummyjson.com/products';

  constructor() { }

  // Metodo para traer todos los productos
  async getAllProducts() : Promise<IProduct[]> {
    const data = await fetch(this.urlProducts);
    const products = await data.json() ?? [];
    return new Promise((resolve)=> {
      setTimeout(() => {
        resolve(products.products)
      }, 500);
    });
  }

  // Metodo para traer un producto por id
  async getProductById(id: Number) : Promise<IProduct> {
    const data = await fetch(`${this.urlProducts}/${id}`);
    return (await data.json()) ?? {};
  }
}
