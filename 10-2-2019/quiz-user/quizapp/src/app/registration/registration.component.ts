import { Component, OnInit } from '@angular/core';
import { Registration } from '../Model/registration';
import { RegistrationService } from '../Service/registration.service';
@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    public registrationObje: Registration;
    public typeOfQuizGiven: Array<String> = [];
    public checkExistingUserCount : number;
    public checkAlreadyExistingUser : boolean = false;
    constructor(private registrationService : RegistrationService) {
        this.registrationObje = new Registration();
    }
     ngOnInit() {
        this.typeOfQuizGiven.push("Student");
        this.typeOfQuizGiven.push("Employee");
    }
    registration() {
            this.registrationService.checkExistingUser(this.registrationObje.email).subscribe(returnCount => {
            this.checkExistingUserCount=returnCount;
            if(this.checkExistingUserCount > 0 ){
                alert("this is existing user:");
                this.checkAlreadyExistingUser = true;
           }
           else if(this.checkExistingUserCount == 0) {
            this.registrationService.saveRegistrationInfo(this.registrationObje).subscribe(check => {
                          alert("Successfully Registration ...");
                         }) 
           }
        });
 
// //store registration information
//         this.registrationService.saveRegistrationInfo(this.registrationObje).subscribe(check => {
//            alert("Successfully Registration ...");
//         }) 
    }

}
    