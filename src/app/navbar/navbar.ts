import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { TooltipPassThrough } from 'primeng/types/tooltip';
import { MenubarTooltipPT } from '../../styles/menubar';
import { ToggleThemeButton } from '../toggle-theme-button/toggle-theme-button';

@Component({
  selector: 'app-navbar',
  imports: [MenubarModule, RippleModule, TooltipModule, ToggleThemeButton],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  protected items?: MenuItem[];
  protected tooltipPT: TooltipPassThrough = MenubarTooltipPT;

  ngOnInit(): void {
    this.items = [
      {
        icon: 'pi pi-home',
        label: 'Accueil',
      },
      {
        icon: 'pi pi-user',
        label: 'Profil',
      },
      {
        icon: 'pi pi-code',
        label: 'Compétences',
      },
      {
        icon: 'pi pi-building',
        label: 'Expériences',
      },
      {
        icon: 'pi pi-graduation-cap',
        label: 'Formations',
      },
      {
        icon: 'pi pi-palette',
        label: "Centres d'intérêt",
      },
    ];
  }
}
