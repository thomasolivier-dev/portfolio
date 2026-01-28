import { Component } from '@angular/core';
import { MenuItem } from '../../shared/models/menu-items.model';
import { MenuAnimationsService } from '../../services/animations/menu-animations.service';
import { menuItems } from '../../shared/constants/app-constants';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    MenuAnimationsService.slideFromright
  ]
})
export class NavbarComponent {
  isOpenMenu: boolean = false;

  toggleMenu(): void {
    this.isOpenMenu=!this.isOpenMenu;
  }

  closeMenu(): void {
    this.isOpenMenu=false;
  }

  readonly menuItems: MenuItem[] = menuItems
}
