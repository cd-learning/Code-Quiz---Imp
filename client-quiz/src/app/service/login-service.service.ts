import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../model/login';
 
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http : HttpClient) { }

  addUser(loginObj : Login) : Observable<Login> {
    return this.http.post<Login>('http://localhost:8080/login/addUser',loginObj);
  }
 
  getAllLoginInfo(emailId : string) : Observable<Login[]>{
    return this.http.get<Login[]>('http://localhost:8080/login/getLoginInfoEmailBase/'+emailId);
  }

}
