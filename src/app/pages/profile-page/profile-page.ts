import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-profile-page',
  imports: [PanelModule, DividerModule, TranslatePipe],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage {}
