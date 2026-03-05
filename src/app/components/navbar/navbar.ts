import { Component, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  translation = inject(TranslationService);
  theme = inject(ThemeService);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  mobileMenuOpen = signal(false);
  activeSection = signal('home');

  get navLinks() {
    return [
      { section: 'home', label: this.translation.t('nav.home') },
      { section: 'services', label: this.translation.t('nav.services') },
      { section: 'solutions', label: this.translation.t('nav.solutions') },
      { section: 'portfolio', label: this.translation.t('nav.portfolio') },
      { section: 'about', label: this.translation.t('nav.about') },
      { section: 'contact', label: this.translation.t('nav.contact') },
    ];
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  scrollToSection(sectionId: string): void {
    this.mobileMenuOpen.set(false);
    this.activeSection.set(sectionId);

    if (!isPlatformBrowser(this.platformId)) return;

    const isHome = this.router.url.startsWith('/home') || this.router.url === '/';
    if (isHome) {
      this.smoothScroll(sectionId);
    } else {
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => this.smoothScroll(sectionId), 100);
      });
    }
  }

  private smoothScroll(sectionId: string): void {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 64; // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
