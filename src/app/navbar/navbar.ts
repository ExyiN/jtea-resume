import { Component, OnInit } from '@angular/core';
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
export class Navbar implements OnInit {
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
        icon: 'pi pi-building',
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
}
