import { Component, inject, OnInit } from '@angular/core';
import { AboutComponent } from '../../components/about/about';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about-page',
  imports: [AboutComponent],
  template: `
    <div class="pt-16">
      <app-about />
    </div>
  `,
})
export class AboutPageComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'About | SoftPro - Our Mission, Vision & Team',
      description: 'Learn about SoftPro mission, vision, team, and the technologies we use to build digital solutions.',
      keywords: 'about SoftPro, team, mission, vision, technologies',
    });
  }
}
