import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioModule } from './portfolio/portfolio.module';

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
        loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule),
        
        
    }
];
