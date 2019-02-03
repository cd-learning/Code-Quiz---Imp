import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paper } from '../model/paper';
import { Observable } from 'rxjs';
import { PaperQuestion } from '../model/paper-question';

@Injectable({
  providedIn: 'root'
})
export class PaperQuestionService {
  constructor(private http : HttpClient) { }
  addPaperQuestion(paper : Paper) :Observable<Paper>{
    return this.http.post<Paper>("http://localhost:8080/paper/paperQuestion",paper);
} 

getPaperQuestionInfo() : Observable<PaperQuestion[]> {
  return this.http.get<PaperQuestion[]>("http://localhost:8080/paperquestions/getPaperQuestionInfo");
}

}
