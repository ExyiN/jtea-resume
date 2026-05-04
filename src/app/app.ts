import { Component, inject, OnInit, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { EducationPage } from './pages/education-page/education-page';
import { ExperiencesPage } from './pages/experiences-page/experiences-page';
import { HardSkillsPage } from './pages/hard-skills-page/hard-skills-page';
import { HobbiesPage } from './pages/hobbies-page/hobbies-page';
import { HomePage } from './pages/home-page/home-page';
import { LanguagesPage } from './pages/languages-page/languages-page';
import { ProfilePage } from './pages/profile-page/profile-page';
import { SoftSkillsPage } from './pages/soft-skills-page/soft-skills-page';
import { ThemeService } from './utils/theme-service';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    HomePage,
    ProfilePage,
    HardSkillsPage,
    SoftSkillsPage,
    LanguagesPage,
    ExperiencesPage,
    EducationPage,
    HobbiesPage,
  ],
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
