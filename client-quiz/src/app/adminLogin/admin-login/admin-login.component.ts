import { Component, OnInit } from '@angular/core';
import { AddCategory } from '../../model/add-category';
import { Login } from '../../model/login';
import { LoginServiceService } from '../../service/login-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {
  public getCatInfo: Array<AddCategory> = [];
  public loggedin: string;
  loginObj: Login;
  public loginFlag = true;
  public requiredFlag: boolean;
  adminLoginForm: FormGroup;
  submitted = false;

  constructor(private loginSer: LoginServiceService, private router: Router, private formBuild: FormBuilder) {
    this.loginObj = new Login();
  }
  ngOnInit() {

    this.adminLoginForm = this.formBuild.group({
      username: ['', [Validators.required,Validators.pattern('[a-zA-Z]+')]],
      password: ['', [Validators.required, , Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    })
  }

  login() {
    this.submitted = true;
    if (this.adminLoginForm.valid) {
      this.loginSer.getAllLoginInfo(this.adminLoginForm.value.username).subscribe(getAllInfo => {
        if (getAllInfo.length > 0) {
          for (let data of getAllInfo) {

            if (data.userEmailId == this.adminLoginForm.value.username && data.userPassword == this.adminLoginForm.value.password && data.adminFlag == this.loginFlag) {
              this.loggedin = this.adminLoginForm.value.username;
              localStorage.setItem("login", this.loggedin);
              window.location.reload();
              this.router.navigate(['/viewCategory']);
              return;
            }
            else {
              alert("Email & Password Wrong !!!");
              return;
            }
          }
        }
        else {

          alert("Not Valid ");

        }
      })

    }


  }


}
