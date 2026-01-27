import { Component } from '@angular/core';
import { MenuItem } from '../../shared/models/menu-items.model';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  readonly menuItems: MenuItem[] = [
      { label: 'À propos', link: '#about' },
      { label: 'Compétences', link: '#skills' },
      { label: 'Projets', link: '#projects' },
      { label: 'Contact', link: '#contact' }
    ];
}
