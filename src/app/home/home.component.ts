import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';
import { ProductComponent } from '../product/product.component';
import { IProduct } from '../elements';
import { ProductService } from '../products.Service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousinglocationComponent, ProductComponent], 
  template: `
    <section>
      <form>
        <input 
        type="search" 
        placeholder="Filtro por descripcion" 
        #filter
        />
        <button  type="button" (click)="filterResults(filter.value)" style="cursor: pointer;">buscar</button>
      </form>
      </section>
      <div style="height: 50px;"></div>
      <section  class="results">
        @if (!productList.length)
        {
            <span>Cargando.....</span>
        }
        @for(product of filteredProductList; track product.id)
        {
        <th>
          <app-product [product]="product"/>
        </th>
        }
      </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Defino el servicio
  productService:ProductService = inject(ProductService);

  // Casas
  productList:IProduct[] = [];
  filteredProductList:IProduct[] = [];

  // Productos
  productsList:IProduct[] = [];

  constructor() {
    this.productService
    .getAllProducts()
    .then((productList: IProduct[]) => {
        this.productList = productList;
        this.filteredProductList = productList;
    });
  }

  filterResults(value:string){
    if (!value)
      {
        this.filteredProductList = this.productList;
      }
      this.filteredProductList = this.productList.filter((product) =>
        product?.title.toLowerCase().includes(value.toLowerCase())
      );
  }
}
