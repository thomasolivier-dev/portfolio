import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../../../shared/models/projects.model';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-project-section',
  imports: [ProjectCardComponent],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss'
})
export class ProjectSectionComponent {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }
}
