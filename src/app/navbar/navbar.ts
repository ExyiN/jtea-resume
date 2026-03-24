import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-navbar',
  imports: [MenubarModule, RippleModule, TooltipModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  protected items?: MenuItem[];

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
