import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        
        data: { animation: 'openClosePage' }
    },
    {
        path: 'about',
        component: AboutComponent,
        
        data: { animation: 'openClosePage' }
    },
    {
        path: 'portfolio',
        component: PortfolioComponent,
        
        
    }
];
