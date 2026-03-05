import { Component, inject, OnInit } from '@angular/core';
import { ServicesComponent } from '../../components/services/services';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-services-page',
  imports: [ServicesComponent],
  template: `
    <div class="pt-16">
      <app-services />
    </div>
  `,
})
export class ServicesPageComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Services | SoftPro - Digital Solutions & Software Development',
      description: 'Explore SoftPro services: Software Development, UI/UX Design, AI Solutions, and Digital Transformation.',
      keywords: 'software development services, UI UX design, AI solutions, digital transformation',
    });
  }
}
