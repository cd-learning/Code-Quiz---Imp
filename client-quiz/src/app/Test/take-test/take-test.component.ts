import { Component, OnInit } from '@angular/core';
import { QuestionServiceService } from '../../Service/question-service.service';
 
import { Paper } from '../../Model/paper';
import { Router } from '@angular/router';
import { Question } from '../../model/question';
import { PaperServiceService } from '../../service/paper-service.service';
    
@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css']
})
export class TakeTestComponent implements OnInit {
    public fetchPaperQuestion: Array<Question> = [];
  public getResponseAllQueston: Array<Paper> = [];
    p: number = 1;
  constructor(private router: Router, private questionSer: QuestionServiceService, private paperService: PaperServiceService) { }
  ngOnInit() {
    alert("show Content")
  } 
  
}
