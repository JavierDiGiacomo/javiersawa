import { Component, inject } from '@angular/core';
import { IProduct } from '../elements';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../products.Service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="text-align: center; width:100%">
    <th>
      <section class="listing">
        <img 
          class="listing-photo"
          [src]="product?.thumbnail" 
          alt="Exterior photo of {{product?.description}}"
        />
    
        <h2 class="listing-heading">{{product?.title}}</h2>
        <p class="listing-location">{{product?.description}}</p>
        <p class="listing-location">Precio : {{product?.price}} $</p>
      </section>
       </th>
    </div>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  // Defino el servicio
  route: ActivatedRoute = inject(ActivatedRoute);
  productgService:ProductService = inject(ProductService);
  product: IProduct | undefined;
  constructor(){
    const productId = Number(this.route.snapshot.params["id"]);
    this.productgService
    .getProductById(productId)
    .then((product) => {
      this.product = product;
    });
  }
}
