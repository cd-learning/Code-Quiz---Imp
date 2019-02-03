import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../model/result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http : HttpClient) { }


  setResult(resultObj : Result): Observable<Result>{

    return this.http.post<Result>('http://localhost:8080/result/studentresult',resultObj);
  }

  
}
