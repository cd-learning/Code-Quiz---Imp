import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../Model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(private http : HttpClient) { }
  getLoginInfoBaseEmailAddress(emailAddress : string) : Observable<Login[]>{
    return this.http.get<Login[]>('http://localhost:8080/login/getLoginInfoEmailBase/'+emailAddress);
  }
  
}
