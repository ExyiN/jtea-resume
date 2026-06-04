import { Component, inject, OnInit } from '@angular/core';
import { _, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import { Experience } from './experience';

@Component({
  selector: 'app-experiences-page',
  imports: [PanelModule, TranslatePipe, ChipModule, TagModule, DividerModule],
  templateUrl: './experiences-page.html',
  styleUrl: './experiences-page.css',
})
export class ExperiencesPage implements OnInit {
  private translate: TranslateService = inject(TranslateService);
  protected experiences!: Experience[];

  ngOnInit(): void {
    this.translate.get(_('experiences.items')).subscribe((res: Experience[]) => {
      this.experiences = res;
    });
  }
}
