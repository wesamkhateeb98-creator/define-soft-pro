import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { TranslationService } from './services/translation.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <div [dir]="translation.dir()" class="min-h-screen flex flex-col"
         [class]="theme.isDark() ? 'bg-dark-bg text-text-light' : 'bg-light-bg text-text-dark'">
      <app-navbar />
      <main class="flex-1">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class App {
  translation = inject(TranslationService);
  theme = inject(ThemeService);
}
