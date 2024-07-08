import { Component, inject } from '@angular/core';
import { IProduct } from '../elements';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../products.Service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div style="text-align: center; width:100%">
    <th>
      <article>
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
        <tr>
        <section>
          <form [formGroup]="applyForm" (submit)="handleSubmit()">
            <table>
            <tr>
                <td colspan="3" style="text-align: center;">
                  <label></label>  
                </td>
              </tr>
              <tr>
                <td colspan="3" style="text-align: center;">
                  <label>Complete la informacion para generar la compra</label>  
                </td>
              </tr>
              <tr>
                <td style="width: 100px;">
                  <label for="first-name">Nombre : </label>
                </td>
                <td style="width: 100px%;">
                  <input type="text" id="first-name" formControlName="firstName">
                </td>
                <td style="width: 300px%;">
                  <span class="alert" [hidden]="firstName.valid || firstName.untouched">El nombre es requerido</span>
                </td>
              </tr>

              <tr>
                <td>
                  <label for="last-name">Apellido : </label>
                </td>
                <td>
                  <input type="text" id="last-name" formControlName="lastName">
                </td>
                <td>
                  <span class="alert" [hidden]="lastName.valid || lastName.untouched">El apellido es requerido</span>
                </td>
              </tr>

              <tr>
                <td>
                <label for="email">Email : </label>
                </td>
                <td>
                <input type="text" id="email" formControlName="email">
                </td>
                <td>
                <span class="alert" [hidden]="email.valid || email.untouched">
                  @if(email.errors?.['required']){Email es requerido} @else{Debe tener el formato corecto}
                </span>
              </tr>
              <tr>
                <td colspan="3" style="text-align: right;">
                  <button  type="submit" style="cursor: pointer;" style="cursor: pointer;" [disabled]="applyForm.invalid">Aceptar</button>
                </td>
              </tr>
            </table>
          </form>
        </section>
      </article>
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

  applyForm = new FormGroup({
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
    ]),
  });

  constructor(){
    const productId = Number(this.route.snapshot.params["id"]);
    this.productgService
    .getProductById(productId)
    .then((product) => {
      this.product = product;
    });
  }

  handleSubmit()
  {
    //alert('Se envio la informacion');

    if (this.applyForm.invalid) return;
    this.productgService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );

  };

  get firstName()
  {
    return this.applyForm.get('firstName') as FormControl;
  }
  get lastName()
  {
    return this.applyForm.get('lastName') as FormControl;
  }
  get email()
  {
    return this.applyForm.get('email') as FormControl;
  }
}
