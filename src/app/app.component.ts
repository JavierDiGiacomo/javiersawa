import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: ` 
    <main>
      <header>
        <Img
        src="/assets/home.JPG"
        alt="logo"
        routerLink="/"
        />
      </header>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </main>
    <footer>
      <p>Copyright © 2024 Javier Alejandro Di Giacomo</p>
      <p>Montiel 1736 1 A (Capital Federal, CP 1440)</p>
    </footer>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'javier-sawa';
}
