import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { ThemeService } from './utils/theme-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('jtea-resume');
  private themeService: ThemeService = inject(ThemeService);

  ngOnInit(): void {
    this.themeService.setDefaultTheme();
  }
}
