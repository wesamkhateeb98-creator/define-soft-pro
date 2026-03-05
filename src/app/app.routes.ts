import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent),
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services-page/services-page').then(m => m.ServicesPageComponent),
  },
  {
    path: 'solutions',
    loadComponent: () => import('./pages/solutions-page/solutions-page').then(m => m.SolutionsPageComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/portfolio-page/portfolio-page').then(m => m.PortfolioPageComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about-page/about-page').then(m => m.AboutPageComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-page/contact-page').then(m => m.ContactPageComponent),
  },
  { path: '**', redirectTo: 'home' },
];
