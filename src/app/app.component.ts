import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
  ]
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts){}
  title = 'Portfolio';
}
