import { Component } from '@angular/core';
import { MenuItem } from '../../shared/models/menu-items.model';
import { menuItems } from '../../shared/constants/app-constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly menuItems: MenuItem[] = menuItems
}
