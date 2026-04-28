import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { TooltipPassThrough } from 'primeng/types/tooltip';
import { MenubarTooltipPT } from '../../styles/menubar';
import { ToggleThemeButton } from '../toggle-theme-button/toggle-theme-button';

@Component({
  selector: 'app-navbar',
  imports: [MenubarModule, RippleModule, TooltipModule, ToggleThemeButton, TranslatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit, AfterViewInit {
  private scroller: ViewportScroller = inject(ViewportScroller);
  protected items?: MenuItem[];
  protected tooltipPT: TooltipPassThrough = MenubarTooltipPT;

  ngOnInit(): void {
    this.items = [
      {
        id: 'home',
        icon: 'pi pi-home',
      },
      {
        id: 'profile',
        icon: 'pi pi-user',
      },
      {
        id: 'skills',
        icon: 'pi pi-code',
      },
      {
        id: 'experiences',
        icon: 'pi pi-briefcase',
      },
      {
        id: 'education',
        icon: 'pi pi-graduation-cap',
      },
      {
        id: 'hobbies',
        icon: 'pi pi-palette',
      },
    ];
  }

  ngAfterViewInit(): void {
    const navbar: HTMLElement | null = document.getElementById('navbar');
    const fontSize: number = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
    if (navbar) {
      this.scroller.setOffset([0, navbar.clientHeight + fontSize]);
    }
  }

  protected scrollToElement(id: string) {
    this.scroller.scrollToAnchor(id, { behavior: 'smooth' });
  }
}
