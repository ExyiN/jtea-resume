import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { _, TranslatePipe, TranslateService, Translation } from '@ngx-translate/core';
import { PanelModule } from 'primeng/panel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-languages-page',
  imports: [PanelModule, TranslatePipe, AsyncPipe],
  templateUrl: './languages-page.html',
  styleUrl: './languages-page.css',
})
export class LanguagesPage {
  private translate: TranslateService = inject(TranslateService);

  protected getLanguages(): Observable<Translation> {
    return this.translate.get(_('languages.items'));
  }
}
