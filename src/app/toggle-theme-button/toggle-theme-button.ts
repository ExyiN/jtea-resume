import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Theme } from '../types/types';
import { ThemeService } from '../utils/theme-service';

@Component({
  selector: 'app-toggle-theme-button',
  imports: [ButtonModule],
  templateUrl: './toggle-theme-button.html',
  styleUrl: './toggle-theme-button.css',
})
export class ToggleThemeButton implements OnInit {
  protected themeService: ThemeService = inject(ThemeService);
  protected btnIcon: WritableSignal<string> = signal('pi pi-sun');

  ngOnInit(): void {
    this.themeService.themeChanges.subscribe((theme: Theme) => {
      if (theme === 'light') {
        this.btnIcon.set('pi pi-sun');
      } else {
        this.btnIcon.set('pi pi-moon');
      }
    });
  }
}
