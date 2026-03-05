import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
})
export class FooterComponent {
  translation = inject(TranslationService);
  theme = inject(ThemeService);
  currentYear = new Date().getFullYear();

  get quickLinks() {
    return [
      { path: '/home', label: this.translation.t('nav.home') },
      { path: '/services', label: this.translation.t('nav.services') },
      { path: '/solutions', label: this.translation.t('nav.solutions') },
      { path: '/portfolio', label: this.translation.t('nav.portfolio') },
      { path: '/about', label: this.translation.t('nav.about') },
      { path: '/contact', label: this.translation.t('nav.contact') },
    ];
  }
}
