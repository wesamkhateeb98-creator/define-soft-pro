import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private currentTheme = signal<Theme>('dark');

  theme = this.currentTheme.asReadonly();

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('softpro-theme') as Theme;
      if (saved) {
        this.setTheme(saved);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.setTheme(prefersDark ? 'dark' : 'light');
      }
    }
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('softpro-theme', theme);
      document.body.classList.remove('dark', 'light');
      document.body.classList.add(theme);
    }
  }

  toggleTheme(): void {
    this.setTheme(this.currentTheme() === 'dark' ? 'light' : 'dark');
  }

  isDark(): boolean {
    return this.currentTheme() === 'dark';
  }
}
