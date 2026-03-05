import { Injectable, signal, computed, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { en, ar } from '../i18n';

export type Language = 'en' | 'ar';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private platformId = inject(PLATFORM_ID);
  private currentLang = signal<Language>('en');
  private translations: Record<Language, any> = { en, ar };

  lang = this.currentLang.asReadonly();
  isRtl = computed(() => this.currentLang() === 'ar');
  dir = computed(() => this.isRtl() ? 'rtl' : 'ltr');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('softpro-lang') as Language;
      if (saved && this.translations[saved]) {
        this.setLanguage(saved);
      } else {
        const browserLang = navigator.language.split('-')[0];
        this.setLanguage(browserLang === 'ar' ? 'ar' : 'en');
      }
    }
  }

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('softpro-lang', lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }

  toggleLanguage(): void {
    this.setLanguage(this.currentLang() === 'en' ? 'ar' : 'en');
  }

  t(key: string): any {
    const keys = key.split('.');
    let value: any = this.translations[this.currentLang()];
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    return value ?? key;
  }
}
