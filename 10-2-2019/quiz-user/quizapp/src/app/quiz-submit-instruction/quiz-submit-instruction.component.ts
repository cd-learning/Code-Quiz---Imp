import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { TakeTestComponent } from '../Test/take-test/take-test.component';
import { Dialog } from '../dialog';
import { QuizResultComponent } from '../quiz-result/quiz-result.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-submit-instruction',
  templateUrl: './quiz-submit-instruction.component.html',
  styleUrls: ['./quiz-submit-instruction.component.css']
})
export class QuizSubmitInstructionComponent implements OnInit {
 public timerOverValue : number;
  constructor(private route: Router,public dialogRef: MatDialogRef<TakeTestComponent>, @Inject(MAT_DIALOG_DATA)public getresult : any,private dialog :MatDialog)  {
  }
  ngOnInit() {
  this.timerOverValue = this.getresult.timerCheck;
  }
  resultSub(){
    if(confirm('are you sure to sumbmit quiz !!!!' )){
       this.resultDialogOpen();
    }
     else{
          if(this.timerOverValue != 0){

            this.dialogRef.close();
          }
          else
          {
            alert("Please Submit Quiz ")
           // this.resultDialogOpen();
          }
     }
             
  }
  close(){
    this.dialogRef.close();
    this.route.navigate(["/"])

  }

  resultDialogOpen(){
    const dialogRef = this.dialog.open(QuizResultComponent, {
      maxWidth: '80vw',
      maxHeight: '200vh',
      height: '500px',
      width: '70%',    
      
      data : {
         result : this.getresult.result
      },
    disableClose : true
    });   
        this.dialogRef.afterOpened().subscribe(()=> {
          this.dialog.closeAll();
        });   
  }

}
