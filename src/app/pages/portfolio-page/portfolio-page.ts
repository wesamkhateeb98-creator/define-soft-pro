import { Component, inject, OnInit } from '@angular/core';
import { PortfolioComponent } from '../../components/portfolio/portfolio';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-portfolio-page',
  imports: [PortfolioComponent],
  template: `
    <div class="pt-16">
      <app-portfolio />
    </div>
  `,
})
export class PortfolioPageComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Portfolio | SoftPro - Our Work & Projects',
      description: 'Explore SoftPro portfolio of successful projects including web apps, mobile apps, and AI solutions.',
      keywords: 'portfolio, projects, web applications, mobile apps, AI solutions, case studies',
    });
  }
}
