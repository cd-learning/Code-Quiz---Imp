import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../Service/login-service.service';
import { Login } from '../../Model/login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginObj : Login;
getLoginList : Array<Login>=[];
public temp;
  constructor(private loginSer : LoginServiceService,private router : Router) {
    this.loginObj=new Login();
   }

  ngOnInit() {
  }
  Login(){
         this.loginSer.getLoginInfoBaseEmailAddress(this.loginObj.userEmailId).subscribe(getResult => {
          this.getLoginList=getResult; 
         for(let loginList of this.getLoginList){
            if( this.loginObj.userPassword === loginList.userPassword && loginList.adminFlag == false){
                localStorage.setItem("loginSession",loginList.userEmailId);
                this.router.navigate(['']);
            }
            else
            {
              alert("UserName and Password  Wrong  Try Again !!! ")
            }
         }
      })
  }
}
