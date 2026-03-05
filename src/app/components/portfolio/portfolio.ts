import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
})
export class PortfolioComponent {
  translation = inject(TranslationService);
  theme = inject(ThemeService);

  get projects(): any[] {
    return this.translation.t('portfolio.items') || [];
  }

  getGradient(index: number): string {
    const gradients = [
      'from-primary to-secondary',
      'from-secondary to-accent',
      'from-accent to-primary',
      'from-primary-dark to-secondary-dark',
      'from-secondary to-primary',
      'from-accent to-secondary',
    ];
    return gradients[index % gradients.length];
  }
}
