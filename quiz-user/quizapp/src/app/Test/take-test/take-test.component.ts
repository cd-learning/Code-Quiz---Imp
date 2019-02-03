import { Component, OnInit } from '@angular/core';
import { Question } from '../../Model/question';
import { QuestionServiceService } from '../../Service/question-service.service';
import { PaperServiceService } from '../../Service/paper-service.service';
import { Paper } from '../../Model/paper';
import { Router } from '@angular/router';
import { debug } from 'util';
import { MatDialog } from '@angular/material';
import { QuizSubmitInstructionComponent } from '../../quiz-submit-instruction/quiz-submit-instruction.component'; 
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
  public getLoginSession: string;
  public totalCorrectAnswer : number = 0 ;
  public startQuizBtnVal : boolean = false;
  public startQuizBtn : boolean = false;
  public instructionHideShowCard : boolean = true;
  p: number = 1;
  public tempCheckIsNumber: boolean = false;
  constructor(private router: Router, private questionSer: QuestionServiceService, private paperService: PaperServiceService,private dialog : MatDialog) { }
  ngOnInit() {
  }
  check() {
    this.listOfTestImagesHide = true;
  }

  question(getVal) {
   
    debugger;
    if (getVal != 'test') {
				
				if(getVal != null && getVal != 'test'){
							localStorage.setItem("loginSession", null);
							this.questionSer.getCategoryWiaQuestionInfo(getVal).subscribe(getResults => {
							this.fetchPaperQuestion = getResults;
							this.listOfTestImagesHide = true;
							})
					}
					else {
						alert("There is no question available !!!");
					}
    }
	
	if(getVal == 'test'){
   // localStorage.clear();
					this.getLoginSession = localStorage.getItem("loginSession");
					if(this.getLoginSession ==  null){
            alert("go to login page");
               this.router.navigate(['/login']);
					}
					else
					{
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
	} 
  }
  checkAnswer(ans){
       if(ans === true){
          this.totalCorrectAnswer= this.totalCorrectAnswer + 1;
      }
  }
  Result(){
     this.dialogOpenFun(); 
     alert("Total Result is  :" + this.totalCorrectAnswer);
  } 
instruction(){
this.startQuizBtnVal = true;
this.instructionHideShowCard = false;
alert();
this.startQuizBtn=true; 
}  
onEvent(d){
   if(d.left == 0 ){
                 this.dialogOpenFun(); 
                }
}

dialogOpenFun(){
  const dialogRef = this.dialog.open(QuizSubmitInstructionComponent, {
    maxWidth: '30vw',
    maxHeight: '30vh',
    height: '60%',
    width: '7  0%',   
  disableClose : true
  });   
}
}
