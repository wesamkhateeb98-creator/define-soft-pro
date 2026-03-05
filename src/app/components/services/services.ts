import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
})
export class ServicesComponent {
  translation = inject(TranslationService);
  theme = inject(ThemeService);

  get services(): any[] {
    return this.translation.t('services.items') || [];
  }

  getIcon(icon: string): string {
    const icons: Record<string, string> = {
      code: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      design: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
      ai: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      transform: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    };
    return icons[icon] || icons['code'];
  }
}
