import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { questionAnwser } from '../shared/models/questionAnwser.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  loadQuestions(): Observable<questionAnwser[]> {
      return this.http.get<questionAnwser[]>('data/question-anwser.json');
    }
}
