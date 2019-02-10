import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegistrationComponent } from '../../registration/registration.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public getLoginUserName;
  constructor(private dialog : MatDialog) { }

  ngOnInit() {
  this.getLoginUserName=localStorage.getItem("loginSession");

  }
  callRegistrationDialog(){
    let dialogRef = this.dialog.open(RegistrationComponent, {
      height: '450px',
      width: '600px',
    });
  }

  clear(){
    localStorage.clear();
  }
}
