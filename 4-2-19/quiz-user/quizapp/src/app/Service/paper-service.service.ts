import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paper } from '../model/paper'; 
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaperServiceService {

  constructor(private http : HttpClient) { }

  getPaperInfo() : Observable<Paper[]> {
    return this.http.get<Paper[]>("http://localhost:8080/paper/getPaperInfo");
  }
}
