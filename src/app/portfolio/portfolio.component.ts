import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GithubService } from '../shared/services/github/github.service';
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
