import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Techno } from '../shared/models/techno.model';

@Injectable({
  providedIn: 'root'
})
export class TechnoService {
  private technos: Techno[] = [];

  constructor(private http: HttpClient) { }

  loadTechnos(): Observable<Techno[]> {
    return this.http.get<Techno[]>('data/technos.json');
  }
}
