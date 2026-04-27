import { Component, inject, OnInit } from '@angular/core';
import { _, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { Education } from './education';

@Component({
  selector: 'app-education-page',
  imports: [PanelModule, TranslatePipe, ChipModule, DividerModule],
  templateUrl: './education-page.html',
  styleUrl: './education-page.css',
})
export class EducationPage implements OnInit {
  private translate: TranslateService = inject(TranslateService);
  protected educations?: Education[];

  ngOnInit(): void {
    this.translate.get(_('education.items')).subscribe((res: Education[]) => {
      this.educations = res;
    });
  }
}
