import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  toggleTheme() {
    console.log('theme toggle');

    const element = document.querySelector('html');
    element?.classList.toggle('theme-dark');
  }
}
