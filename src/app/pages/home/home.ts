import { Component, inject, OnInit } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { ServicesComponent } from '../../components/services/services';
import { SolutionsComponent } from '../../components/solutions/solutions';
import { PortfolioComponent } from '../../components/portfolio/portfolio';
import { AboutComponent } from '../../components/about/about';
import { ContactComponent } from '../../components/contact/contact';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    ServicesComponent,
    SolutionsComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
  ],
  template: `
    <app-hero />
    <app-services />
    <app-solutions />
    <app-portfolio />
    <app-about />
    <app-contact />
  `,
})
export class HomeComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'SoftPro | Digital Solutions & Software Development',
      description: 'SoftPro helps businesses solve digital problems by building modern web applications, mobile apps, and AI-powered solutions.',
      keywords: 'SoftPro, software development, digital solutions, web development, mobile apps, AI solutions',
    });
  }
}
