import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ButtonMenuComponent } from '../button-menu/button-menu.component';
import { CurtainMenuComponent } from '../curtain-menu/curtain-menu.component';
import { dataHeaderMenuLinks, DataHeaderMenuLinks } from '../../../data/data-header-menu-links';
import { SignUpButtonComponent } from '../sign-up-button/sign-up-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    ButtonMenuComponent, 
    CurtainMenuComponent, 
    SignUpButtonComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isOpeCurtainMenu: boolean = false;
  dataLinks: DataHeaderMenuLinks[] = dataHeaderMenuLinks;
  public toggleCurtainMenu () {
    this.isOpeCurtainMenu = !this.isOpeCurtainMenu;
  };

  public closeMenu () {
    this.isOpeCurtainMenu = false;
  }
}
