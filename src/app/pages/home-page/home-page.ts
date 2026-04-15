import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-home-page',
  imports: [PanelModule, ButtonModule, TranslatePipe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
