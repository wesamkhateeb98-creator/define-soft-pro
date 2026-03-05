import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-solutions',
  imports: [],
  templateUrl: './solutions.html',
})
export class SolutionsComponent {
  translation = inject(TranslationService);
  theme = inject(ThemeService);

  get solutions(): any[] {
    return this.translation.t('solutions.items') || [];
  }

  get features(): string[] {
    return this.translation.t('solutions.features') || [];
  }

  getIcon(icon: string): string {
    const icons: Record<string, string> = {
      health: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      finance: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      education: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
      retail: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
    };
    return icons[icon] || icons['health'];
  }
}
