import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);

  updateMetaTags(config: {
    title?: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
  }): void {
    if (config.title) {
      this.title.setTitle(config.title);
      this.meta.updateTag({ property: 'og:title', content: config.title });
      this.meta.updateTag({ name: 'twitter:title', content: config.title });
    }
    if (config.description) {
      this.meta.updateTag({ name: 'description', content: config.description });
      this.meta.updateTag({ property: 'og:description', content: config.description });
      this.meta.updateTag({ name: 'twitter:description', content: config.description });
    }
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }
    if (config.ogImage) {
      this.meta.updateTag({ property: 'og:image', content: config.ogImage });
    }
  }
}
