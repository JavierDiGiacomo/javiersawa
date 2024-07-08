import { Injectable } from '@angular/core';
import {  IProduct } from './elements';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  urlHousings = 'http://localhost:3000/locations';

 // urlHousings = 'https://f438584752444911829acdb4890ef8a2.api.mockbin.io/locations'
 //urlHousings = 'https://dummyjson.com/products';
  constructor() { }

  // Metodos de housing
  async getAllHousingLocation() : Promise<IProduct[]> {
    const data = await fetch(this.urlHousings);
    const houses = await data.json() ?? [];
    return new Promise((resolve)=> {
      setTimeout(() => {
        resolve(houses)
      }, 500);
    });
  }

  async getHousingLocationById(id: Number) : Promise<IProduct> {
    const data = await fetch(`${this.urlHousings}/${id}`);
    return (await data.json()) ?? {};
  }

  // Metodos de products
  urlProducts = 'https://jsonplaceholder.typicode.com/photos';
  //urlProducts = 'https://dummyjson.com/products';
  async getAllProducts() : Promise<IProduct[]> {
    const data = await fetch(this.urlProducts);
    const products = await data.json() ?? [];
    return new Promise((resolve)=> {
      setTimeout(() => {
        resolve(products)
      }, 500);
    });
  }
}
