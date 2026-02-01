import { Injectable } from '@angular/core';
import { Project } from '../shared/models/projects.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get<Project[]>('data/projects.json');
  }
}
