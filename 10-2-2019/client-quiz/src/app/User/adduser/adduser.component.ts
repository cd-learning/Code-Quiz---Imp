import { Component, OnInit } from '@angular/core';
import { AddCategory } from '../../model/add-category';
import { Login } from '../../model/login';
import { LoginServiceService } from '../../service/login-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  public getCatInfo: Array<AddCategory> = [];
  loginObj : Login;
  addUserform : FormGroup;
  submitted : boolean = false;
  constructor(private formBuilder : FormBuilder,private loginSer : LoginServiceService) { 
    this.loginObj = new Login();
  }
  ngOnInit() {
    this.addUserform =this.formBuilder.group({
      username : ['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
      password : ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    })
  }
  login(){
     
    this.submitted = true;
    if(this.addUserform.valid){
                          
                  this.loginObj.userEmailId=this.addUserform.value.username;
                  this.loginObj.userPassword=this.addUserform.value.password;
                  this.loginObj.adminFlag=false;
                  this.loginSer.addUser(this.loginObj).subscribe(getLoginObj => {
                    alert("Successfully inserted ...........................");
                    sessionStorage.setItem('loginSession',this.loginObj.userEmailId);
                    var x = sessionStorage.getItem('loginSession ');
                    console.log('Session Name is : ' + sessionStorage.getItem('loginSession'))
                  })
              
              
    }
    else
       return;
  }
}
