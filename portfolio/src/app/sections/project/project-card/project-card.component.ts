import { Component, Input } from '@angular/core';
import { ImageTooltipComponent } from '../../../shared/components/tooltips/image-tooltip/image-tooltip.component';
import { Techno } from '../../../shared/models/techno.model';

@Component({
  selector: 'app-project-card',
  imports: [ImageTooltipComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() imagePath!: string;
  @Input() title!: string;
  @Input() desc!: string;
  @Input() githubUrl?: string;
  @Input() siteUrl?: string;
  @Input() listTechno?: Techno[];

}
