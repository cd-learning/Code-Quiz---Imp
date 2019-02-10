import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../Service/login-service.service';
import { Login } from '../../Model/login';
import { Router } from '@angular/router';
import { RegistrationService } from '../../Service/registration.service';
import { Registration } from '../../Model/registration';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginObj : Login;
getLoginList : Array<Login>=[];
public registrationObj : Registration;
public temp;
  constructor(private loginSer : LoginServiceService,private registrationSer : RegistrationService,private router : Router) {
    this.loginObj=new Login();
   }

  ngOnInit() {
  }
  Login(){
      //    this.loginSer.getLoginInfoBaseEmailAddress(this.loginObj.userEmailId).subscribe(getResult => {
      //     this.getLoginList=getResult; 
      //    for(let loginList of this.getLoginList){
      //       if( this.loginObj.userPassword === loginList.userPassword && loginList.adminFlag == false){
      //           localStorage.setItem("loginSession",loginList.userEmailId);
      //           this.router.navigate(['']);
      //       }
      //       else
      //       {
      //         alert("UserName and Password  Wrong  Try Again !!! ")
      //       }
      //    }
      // })

      
      this.registrationSer.login(this.loginObj.userEmailId).subscribe(getResult => {
         this.registrationObj = getResult;

         if(this.loginObj.userEmailId === this.registrationObj.email && this.loginObj.userPassword === this.registrationObj.password){
             localStorage.setItem("loginSession",this.loginObj.userEmailId);
             this.router.navigate(['']);
         }
         else
         {
           alert("UserName and Password  Wrong  Try Again !!! ")
         }
      })


  }
}
