import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
})
export class AboutComponent {
  translation = inject(TranslationService);
  theme = inject(ThemeService);

  get teamMembers(): any[] {
    return this.translation.t('about.team.members') || [];
  }

  get technologies(): string[] {
    return this.translation.t('about.technologies.items') || [];
  }
}
