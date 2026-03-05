import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
})
export class HeroComponent {
  translation = inject(TranslationService);
  theme = inject(ThemeService);

  stats = [
    { value: '150+', key: 'projects' },
    { value: '80+', key: 'clients' },
    { value: '10+', key: 'experience' },
    { value: '50+', key: 'team' },
  ];
}
