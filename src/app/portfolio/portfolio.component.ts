import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GithubService } from '../shared/services/github/github.service';
import { HttpClient } from '@angular/common/http';
import { IgxCarouselComponent } from 'igniteui-angular';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  constructor(private githubService: GithubService, private http: HttpClient) { }
  
  @ViewChild('carousel', { static: true }) carousel!: IgxCarouselComponent;

  slides: any[] = [];
  projects: any[] = []

  currentIndex: number =  0;

  async ngOnInit() {
    
    await this.githubService.getRepos().subscribe(async (repos: any[]) => {
      for(let i = 0; i < repos.length; i++) {
        
        if(repos[i].extra !== ""){
           await this.http.get(repos[i].extra).subscribe((response: any) => {
            if(response.time) repos[i].creation = response.time
              console.log(repos[i])
              this.slides = repos.sort((a,b) => (new Date(b.creation)).getTime() - new Date(a.creation).getTime());
              
           });

        }

      }
  

      
    });
  }

  ngAfterViewInit(): void {
    
    this.slides = this.slides.sort((a,b) => (new Date(b.creation)).getTime() - new Date(a.creation).getTime());
  }

  slideChanged(event: any){
   this.currentIndex =  (event.slide.index)
  }

  adjustSlide(index: number){
    let slide = this.carousel.get(index)
    this.carousel.select(slide);
    this.currentIndex = index;
  }
}
