import { Injectable } from '@angular/core';
import { Project, ProjectRaw } from '../shared/models/projects.model';
import { HttpClient } from '@angular/common/http';
import { TechnoService } from './techno.service';
import { forkJoin, map, Observable } from 'rxjs';
import { Techno } from '../shared/models/techno.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient, private technoService: TechnoService) {}

  getProjects(): Observable<Project[]> {
    return forkJoin({
      projects: this.http.get<ProjectRaw[]>('data/projects.json'),
      technos: this.technoService.loadTechnos()
    }).pipe(
      map(({ projects, technos }) => {
        // Create a map for speed access to data
        const technoMap = new Map<string, Techno>();
        technos.forEach(techno => technoMap.set(techno.id, techno));

        // Mapping project with techno
        return projects.map(project => ({
          ...project,
          technos: project?.technos
            ?.map(technoId => technoMap.get(technoId))
            ?.filter((techno): techno is Techno => techno !== undefined)
        }));
      })
    );
  }
}
