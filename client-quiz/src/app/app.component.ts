import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client-quiz';
  loggedin=false;
  
  constructor(private router:Router){
    if(localStorage.getItem("login")!=null){
      this.loggedin=true;
    }else{
      //router.navigate(['/adminLogin']);
    }
  }
}
