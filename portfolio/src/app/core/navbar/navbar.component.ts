import { Component } from '@angular/core';
import { MenuItem } from '../../shared/models/menu-items.model';
import { MenuAnimationsService } from '../../services/animations/menu-animations.service';

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

  readonly menuItems: MenuItem[] = [
      { label: 'À propos', link: '#about' },
      { label: 'Compétences', link: '#skills' },
      { label: 'Projets', link: '#projects' },
      { label: 'Contact', link: '#contact' }
    ];
}
