import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { _, TranslatePipe, TranslateService, Translation } from '@ngx-translate/core';
import { PanelModule } from 'primeng/panel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hard-skills-page',
  imports: [PanelModule, TranslatePipe, AsyncPipe],
  templateUrl: './hard-skills-page.html',
  styleUrl: './hard-skills-page.css',
})
export class HardSkillsPage {
  private translate: TranslateService = inject(TranslateService);

  protected getSkills(key: string): Observable<Translation> {
    return this.translate.get(_(`hard-skills.${key}.items`));
  }
}
