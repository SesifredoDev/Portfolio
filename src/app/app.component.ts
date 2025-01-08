import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { slideInAnimation } from './animations';
import { GithubService } from './shared/services/github/github.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
  ]
})
export class AppComponent implements OnInit {
  constructor(){}
  title = 'Portfolio';

  ngOnInit(): void {
  }


}
