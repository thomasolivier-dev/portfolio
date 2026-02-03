import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import * as icons from 'lucide-angular';
import { TechnoSkill } from '../../../shared/models/techno.model';
import { TechnoService } from '../../../services/techno.service';

@Component({
  selector: 'app-skill-card',
  imports: [LucideAngularModule],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() type!: string;
  
  iconData: any;
  public technos: TechnoSkill[] = [];

  constructor(private technoService: TechnoService) {}

  ngOnInit() {
    this.iconData = this.getIcon(this.icon);
    this.technoService.loadTechnosByType(this.type).subscribe(technos => {
      this.technos = technos;
    })
  }

  private getIcon(name: string) {
    const iconName = name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    
    return (icons as any)[iconName];
  }

  getStars(rating: number): boolean[] {
    return Array(5).fill(false).map((_, index) => index < rating);
  }

}
