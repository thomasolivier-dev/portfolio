import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Techno, TechnoSkill, TechnoSkillData } from '../shared/models/techno.model';

@Injectable({
  providedIn: 'root'
})
export class TechnoService {

  constructor(private http: HttpClient) { }

  /**
   * Loads the complete list of technologies from the JSON file
   * @returns Observable containing an array of Techno
   */
  loadTechnos(): Observable<Techno[]> {
    return this.http.get<Techno[]>('data/technos.json');
  }

  /**
   * Loads technology skills filtered by type (backend, frontend, etc.)
   * @param type - The skill type to retrieve (e.g., 'backend', 'frontend', 'database')
   * @returns Observable containing an array of TechnoSkill for the specified type
   */
  loadTechnosByType(type: string): Observable<TechnoSkill[]> {
    return this.http.get<TechnoSkillData>('data/skill.json').pipe(
      map(data => data[type] || [])
    );
  }
}