import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import * as icons from 'lucide-angular';

@Component({
  selector: 'app-skill-card',
  imports: [LucideAngularModule],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  @Input() title!: string;
  @Input() icon!: string;
  
  iconData: any;

  ngOnInit() {
    this.iconData = this.getIcon(this.icon);
  }

  private getIcon(name: string) {
    const iconName = name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    
    return (icons as any)[iconName];
  }

}
