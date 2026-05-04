import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { _, TranslatePipe, TranslateService, Translation } from '@ngx-translate/core';
import { PanelModule } from 'primeng/panel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hobbies-page',
  imports: [PanelModule, TranslatePipe, AsyncPipe],
  templateUrl: './hobbies-page.html',
  styleUrl: './hobbies-page.css',
})
export class HobbiesPage {
  private translate: TranslateService = inject(TranslateService);

  protected getHobbies(): Observable<Translation> {
    return this.translate.get(_('hobbies.items'));
  }
}
