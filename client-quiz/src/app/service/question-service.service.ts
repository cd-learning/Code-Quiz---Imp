import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Paper } from '../model/paper';
import { map } from 'rxjs/operators';
import { Question } from '../model/question';
@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(private http : HttpClient) { }

  //add question in table 
  addQuestion(question : Question) :Observable<Question>{
    return this.http.post<Question>('http://localhost:8080/question/addquestion',question);
  }
  // get Question List...
  getCategoryInfo(categoryId : number) : Observable<Question[]> {
    return this.http.get<Question[]>("http://localhost:8080/question/getQuestionBaseCategory/"+categoryId);
  }
  getQuestionTextBaseQuestionId(questionId : number) : Observable<string> {
  return this.http.get<string>('http://localhost:8080/question/getQuestionBaseQuestionId/'+ questionId);
}
getAllQuestionInfo() : Observable<Question[]>{
  return this.http.get<Question[]>('http://localhost:8080/question/getQuestionInfo');
}

deleQuestionAndAnswerBaseCategory(categoryId : number) : Observable<Question>
{
  return this.http.delete<Question>('http://localhost:8080/question/deleteCategoryBaseCategory/'+categoryId);
}
getQuestionIdBasefetchList(questionId : number) :  Observable<Question>{
  return this.http.get<Question>('http://localhost:8080/question/fetchPaperIdBaseQuestion/'+questionId);
}
}
 