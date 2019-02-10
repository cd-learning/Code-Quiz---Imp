import { Component, OnInit } from '@angular/core';
import { Question } from '../../Model/question';
import { QuestionServiceService } from '../../Service/question-service.service';
import { PaperServiceService } from '../../Service/paper-service.service';
import { Paper } from '../../Model/paper';
import { Router } from '@angular/router';
import { debug } from 'util';
import { MatDialog } from '@angular/material';
import { QuizSubmitInstructionComponent } from '../../quiz-submit-instruction/quiz-submit-instruction.component';
import { tempResult } from '../../Model/registration';
@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css']
})
export class TakeTestComponent implements OnInit {
  public listOfTestImagesHide: boolean = false;
  public takeTestFlag: boolean = false;
  public questionObj: Question;
  public fetchPaperQuestion: Array<Question> = [];
  public getResponseAllQueston: Array<Paper> = [];
  public tempResul : Array<tempResult> =[]
  public getLoginSession: string;
  public totalCorrectAnswer: number = 0;
  public startQuizBtnVal: boolean = false;
  public startQuizBtn: boolean = false;
  public instructionHideShowCard: boolean = true;
  public timerOverValue: number;
  public getQuestionId: number;
  public textBoxHidden: boolean = true;
  public questionResultId: Array<string> = [];
  public questionResultCorrect: Array<boolean> = [];
public radioButtonSetKeyValue : Array<any> = []
// public radioStore : Map<number,number> = new Map<number,number>();
public radioStore = {};

  p: number = 1;
public  multi : number[][] = [];
  public tempCheckIsNumber: boolean = false;
  constructor(private router: Router, private questionSer: QuestionServiceService, private paperService: PaperServiceService, private dialog: MatDialog) { }
  ngOnInit() { }
  check() {
    this.listOfTestImagesHide = true;
  }

  
 //---------------------------------------------------------------------------------------
  question(getVal) {
    if (getVal != 'test') {
      if (getVal != null && getVal != 'test') {
        if (localStorage.getItem("loginSession") === null) {
  
          localStorage.setItem("loginSession", "Test");
        }
        this.questionSer.getCategoryWiaQuestionInfo(getVal).subscribe(getResults => {
          this.fetchPaperQuestion = getResults;
          this.listOfTestImagesHide = true;
        })
      }
      else {
        alert("There is no question available !!!");
      }
    }

    if (getVal === 'test') {
      if (localStorage.getItem("loginSession") === "Test") {
        this.listOfTestImagesHide = false;
        this.router.navigate(['/login']);
        return;
      }
      if ("loginSession" in localStorage && localStorage.getItem("loginSession") != null) {
        this.listOfTestImagesHide = true;
        this.paperService.getPaperInfo().subscribe(getPaperResult => {
          this.getResponseAllQueston = getPaperResult;
          for (let data of this.getResponseAllQueston) {
            for (let ans of data.paperQuestionList) {
              console.log(ans.paperSelectQuestionId);
              this.questionSer.getQuestionIdBasefetchList(ans.paperSelectQuestionId).subscribe(getAllDataOfPaper => {
                this.fetchPaperQuestion.push(getAllDataOfPaper);
              })
            }
          }
        })
      }
      else {
        alert("go to login page");
        this.listOfTestImagesHide = false;
        this.router.navigate(['/login']);

      }
    }
  }
 //--------------------------------------------------------------------------------------- 
  checkAnswer(ans, questionId,p,i) {
    
    this.radioStore[p] = i;
        for (let count = 0; count < this.questionResultId.length; count++) {
      if (this.questionResultId[count] === questionId && this.questionResultCorrect[count]!=ans) {
        {
          this.questionResultCorrect[count] = ans;
          if(ans == true)
          this.totalCorrectAnswer = this.totalCorrectAnswer + 1;
          else
          this.totalCorrectAnswer = this.totalCorrectAnswer - 1;
        }
      }
    }
    //question is not exits then 
    if (!this.questionResultId.some((item, index) => item == questionId)) {
      this.questionResultId.push(questionId);
      this.questionResultCorrect.push(ans); 
         if(ans ==true)      
      this.totalCorrectAnswer = this.totalCorrectAnswer + 1;
    }  

    // //total result count
    // for (let count = 0; count < this.questionResultCorrect.length; count++) {
    //              if(this.questionResultCorrect[count] == true){
    //                     this.totalCorrectAnswer = this.totalCorrectAnswer + 1;
    //              }
    //  }
     alert("Total Marks is :" + this.totalCorrectAnswer);
  }
  Result() {
    this.dialogOpenFun(); 
  }
  instruction() {
    this.startQuizBtnVal = true;
    this.instructionHideShowCard = false;
    alert();
    this.startQuizBtn = true;
  }
  onEvent(d) {
    if (d.left == 0) {
      this.timerOverValue = d.left;
      this.dialogOpenFun();
    }
  }

  dialogOpenFun() {
    const dialogRef = this.dialog.open(QuizSubmitInstructionComponent, {
      maxWidth: '50vw',
      maxHeight: '50vh',
      height: '60%',
      width: '70%',
      data: {
        result: this.totalCorrectAnswer,
        timerCheck: this.timerOverValue

      },
      disableClose: true
    });

  }
}
