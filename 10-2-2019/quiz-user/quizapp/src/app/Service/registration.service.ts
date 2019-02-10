import { Injectable } from '@angular/core';
 
import { Registration } from '../Model/registration';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http : HttpClient) { }
   saveRegistrationInfo(registrationObj : Registration) : Observable<Registration>{
   return this.http.post<Registration>('http://localhost:8080/registration/saveRegistration',registrationObj);
  }
 
  checkExistingUser(emailAddress : string) : Observable<number>{
    return this.http.get<number>('http://localhost:8080/registration/checkExistingUser/'+emailAddress);
  }
  login(emailAddress : string) : Observable<Registration>{
    return this.http.get<Registration>('http://localhost:8080/registration/check/'+emailAddress);
  }


}
