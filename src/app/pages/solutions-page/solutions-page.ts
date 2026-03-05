import { Component, inject, OnInit } from '@angular/core';
import { SolutionsComponent } from '../../components/solutions/solutions';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-solutions-page',
  imports: [SolutionsComponent],
  template: `
    <div class="pt-16">
      <app-solutions />
    </div>
  `,
})
export class SolutionsPageComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Solutions | SoftPro - Industry-Focused Digital Solutions',
      description: 'Industry-focused digital solutions for Healthcare, Finance, Education, and Retail by SoftPro.',
      keywords: 'digital solutions, healthcare technology, fintech, edtech, retail solutions',
    });
  }
}
