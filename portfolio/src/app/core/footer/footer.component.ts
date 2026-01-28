import { Component } from '@angular/core';
import { MenuItem } from '../../shared/models/menu-items.model';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly menuItems: MenuItem[] = [
        { label: 'À propos', link: '#about' },
        { label: 'Compétences', link: '#skills' },
        { label: 'Projets', link: '#projects' },
        { label: 'Contact', link: '#contact' }
      ];
}
