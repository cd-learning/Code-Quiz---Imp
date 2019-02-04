import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Question } from '../model/question';
 
@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  constructor(private http : HttpClient) { }
getAllQuestionInfo() : Observable<Question[]>{
  return this.http.get<Question[]>('http://localhost:8080/question/getQuestionInfo');
}
getQuestionIdBasefetchList(questionId : number) :  Observable<Question>{
  return this.http.get<Question>('http://localhost:8080/question/fetchPaperIdBaseQuestion/'+questionId);
} 
getCategoryWiaQuestionInfo(categoryId : number) : Observable<Question[]>{
  return this.http.get<Question[]>('http://localhost:8080/question/getParticularIdInUserSideDisplay/'+categoryId);
}
}
 