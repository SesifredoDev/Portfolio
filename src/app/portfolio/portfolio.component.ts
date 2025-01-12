import { NgFor } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { GithubService } from '../shared/services/github/github.service';
import { HammerModule } from '@angular/platform-browser';
import { IGX_CAROUSEL_DIRECTIVES } from 'igniteui-angular';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  constructor(private githubService: GithubService) { }

  slides: any[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.githubService.getRepos().subscribe((repos: any[]) => {
      this.slides = repos;
      console.log(this.slides)
    });
  }
}
