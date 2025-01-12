import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { PortfolioComponent } from './portfolio.component';
import { portfolioRoutingModule } from './portfolio-routing.module';
import { MatCardModule } from '@angular/material/card';
import { IgxCarouselModule } from 'igniteui-angular'; // Corrected import for carousel module
import { HammerModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Corrected import for RouterModule

@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    portfolioRoutingModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    IgxCarouselModule, // Changed to the correct module
    HammerModule,
    RouterModule // Changed to the correct module
  ]
})
export class PortfolioModule { }
