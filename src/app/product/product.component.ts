import { Component, Input } from '@angular/core';
import { IProduct } from '../elements';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="listing" [routerLink]="['/details/', product.id]">
      <img 
       class="listing-photo"
        [src]="product.thumbnail" 
        alt="Exterior foto de {{product.description}}"
      />
   
      <h2 class="listing-heading">{{product.title}}</h2>
      <p class="listing-location">{{product.description}}</p>
    </section>
  `,
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product! : IProduct;
}
