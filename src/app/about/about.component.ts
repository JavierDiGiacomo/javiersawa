import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <p>
      Somos una empresa dedicada al desarrollo de SoftWare
    </p>
    <p>
      Este es un TP dedicado para la Universidad Tecnologica Nacional Facultad Regional Buenos Aires
    </p>
  `,
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
