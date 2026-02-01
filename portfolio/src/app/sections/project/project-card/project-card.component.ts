import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() imagePath!: string;
  @Input() title!: string;
  @Input() desc!: string;
  @Input() githubUrl?: string;
  @Input() siteUrl?: string;

}
