import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { _, TranslatePipe, TranslateService, Translation } from '@ngx-translate/core';
import { PanelModule } from 'primeng/panel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-soft-skills-page',
  imports: [PanelModule, TranslatePipe, AsyncPipe],
  templateUrl: './soft-skills-page.html',
  styleUrl: './soft-skills-page.css',
})
export class SoftSkillsPage {
  private translate: TranslateService = inject(TranslateService);

  protected getSkills(): Observable<Translation> {
    return this.translate.get(_('soft-skills.items'));
  }
}
