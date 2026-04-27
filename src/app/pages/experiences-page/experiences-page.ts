import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { _, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ButtonDesignTokens } from '@primeuix/themes/types/button';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import { IconOnlyButtonStyle } from '../../../styles/button';
import { Experience } from './experience';

@Component({
  selector: 'app-experiences-page',
  imports: [PanelModule, TranslatePipe, ButtonModule, ChipModule, TagModule, DividerModule],
  templateUrl: './experiences-page.html',
  styleUrl: './experiences-page.css',
})
export class ExperiencesPage implements OnInit {
  private translate: TranslateService = inject(TranslateService);
  protected experiences!: Experience[];
  protected currentIndex: WritableSignal<number> = signal(0);
  protected iconOnlyButtonStyle: ButtonDesignTokens = IconOnlyButtonStyle;

  ngOnInit(): void {
    this.translate.get(_('experiences.items')).subscribe((res: Experience[]) => {
      this.experiences = res;
    });
  }

  protected incrementBy(value: number) {
    this.currentIndex.set(this.currentIndex() + value);
  }
}
