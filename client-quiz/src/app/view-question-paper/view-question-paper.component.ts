import { Component, OnInit } from '@angular/core';
 
import { Paper } from '../model/paper';
import { Router } from '@angular/router';
//import { QuestionServiceService } from '../service/question-service.service';
 import { PaperServiceService } from '../service/paper-service.service';
import { Question } from '../model/question';
import { QuestionServiceService } from '../Service/question-service.service';

@Component({
  selector: 'app-view-question-paper',
  templateUrl: './view-question-paper.component.html',
  styleUrls: ['./view-question-paper.component.css']
})
export class ViewQuestionPaperComponent implements OnInit {
 
  deleteCategory : boolean;
  public fetchPaperQuestion: Array<Question> = [];
  public getResponseAllQueston: Array<Paper> = [];
    p: number = 1;
  constructor(private router: Router, private questionSer: QuestionServiceService, private paperService: PaperServiceService) { }
  ngOnInit() {
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
  
  
  deleteQuestion(getData){
    this.deleteCategory=confirm("Are you sure to delete Quiz Category"+ getData.questionId);
   if(this.deleteCategory == true){
      alert("Delete ")
      console.log(getData);
   }
   else
   {
     alert("Not Delete : ");
   }
  }

}
