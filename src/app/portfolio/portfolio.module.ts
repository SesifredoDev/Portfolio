import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule, MERMAID_OPTIONS, provideMarkdown } from 'ngx-markdown';
import { PortfolioComponent } from './portfolio.component';
import { portfolioRoutingModule } from './portfolio-routing.module';
import { MatCardModule } from '@angular/material/card';
import { IgxCarouselModule } from 'igniteui-angular'; // Corrected import for carousel module
import { HammerModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Corrected import for RouterModule
import { TimelineSliderComponent } from '../timeline-slider/timeline-slider.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PortfolioComponent,
    TimelineSliderComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    portfolioRoutingModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
      mermaidOptions: {
        provide: MERMAID_OPTIONS,
        useValue: {
          darkMode: true,
          look: 'handDrawn',
        },
      },
    }),
    MarkdownModule.forChild(),
    IgxCarouselModule, // Changed to the correct module
    HammerModule,
    RouterModule, // Changed to the correct module,
    MatButtonModule
  ],
  providers:[
    
    provideMarkdown({
      mermaidOptions: {
        provide: MERMAID_OPTIONS,
        useValue: {
          darkMode: true,
          look: 'handDrawn',
        },
      },
    }),
  ]
})
export class PortfolioModule { }
