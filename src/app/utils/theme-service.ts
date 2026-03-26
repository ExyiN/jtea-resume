import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeKey: string = 'theme';
  private themeChanges$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>('light');

  get themeChanges() {
    return this.themeChanges$.asObservable();
  }

  private isTheme(value: string): value is Theme {
    return value === 'light' || value === 'dark';
  }

  private setTheme(theme: Theme) {
    localStorage.setItem(this.themeKey, theme);
    const htmlElem: HTMLHtmlElement | null = document.querySelector('html');
    if (!htmlElem) {
      return;
    }
    if (theme === 'light') {
      htmlElem.classList.remove('theme-dark');
    } else {
      htmlElem.classList.add('theme-dark');
    }
    this.themeChanges$.next(theme);
  }

  setDefaultTheme() {
    const theme: string | null = localStorage.getItem(this.themeKey);
    if (theme && this.isTheme(theme)) {
      this.setTheme(theme);
      return;
    }
    const preferesLightTheme = window.matchMedia('(prefers-color-scheme: light)');
    if (preferesLightTheme.matches) {
      this.setTheme('light');
    } else {
      this.setTheme('dark');
    }
  }

  toggleTheme() {
    const theme: string | null = localStorage.getItem(this.themeKey);
    if (!theme || !this.isTheme(theme)) {
      this.setDefaultTheme();
      return;
    }
    if (theme === 'light') {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }
  }
}
