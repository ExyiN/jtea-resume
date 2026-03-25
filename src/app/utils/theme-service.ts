import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private setTheme(theme: 'light' | 'dark') {
    localStorage.setItem('theme', theme);
    const htmlElem: HTMLHtmlElement | null = document.querySelector('html');
    if (!htmlElem) {
      return;
    }
    if (theme == 'light') {
      htmlElem.classList.remove('theme-dark');
    } else {
      htmlElem.classList.add('theme-dark');
    }
  }

  setDefaultTheme() {
    const theme: string | null = localStorage.getItem('theme');
    if (theme && (theme == 'light' || theme == 'dark')) {
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
    const theme: string | null = localStorage.getItem('theme');
    if (!theme || (theme != 'light' && theme != 'dark')) {
      return;
    }
    if (theme == 'light') {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }
  }
}
