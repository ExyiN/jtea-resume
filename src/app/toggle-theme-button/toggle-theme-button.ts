import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from './theme-service';

@Component({
  selector: 'app-toggle-theme-button',
  imports: [ButtonModule],
  templateUrl: './toggle-theme-button.html',
  styleUrl: './toggle-theme-button.css',
})
export class ToggleThemeButton {
  protected themeService: ThemeService = inject(ThemeService);
}
