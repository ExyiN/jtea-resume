import { Component, inject, OnInit, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { HomePage } from './pages/home-page/home-page';
import { ProfilePage } from './pages/profile-page/profile-page';
import { ThemeService } from './utils/theme-service';
import { HardSkillsPage } from "./pages/hard-skills-page/hard-skills-page";

@Component({
  selector: 'app-root',
  imports: [Navbar, HomePage, ProfilePage, HardSkillsPage],
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
