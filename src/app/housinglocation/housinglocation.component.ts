import { Component, Input } from '@angular/core';
import { IProduct } from '../elements';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housinglocation',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="listing" [routerLink]="['/details/', product.id]">
      <img 
       class="listing-photo"
        [src]="product.thumbnail" 
        alt="Exterior photo of {{product.description}}"
      />
   
      <h2 class="listing-heading">{{product.title}}</h2>
      <p class="listing-location">{{product.description}}</p>
      <p class="listing-location">Precio : {{product.price}} $</p>
    </section>
  `,
  styleUrl: './housinglocation.component.css'
})
export class HousinglocationComponent {
  @Input() product! : IProduct;
}
