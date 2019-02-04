import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-instruction',
  templateUrl: './quiz-instruction.component.html',
  styleUrls: ['./quiz-instruction.component.css']
})
export class QuizInstructionComponent implements OnInit {

  public quizInstructionShowHide : boolean = false;
  constructor() { }

  ngOnInit() {
  }
  startQuiz(){
    if(confirm("Please ")){
            this.quizInstructionShowHide = true;
    }
    else  
    {
      this.quizInstructionShowHide = false;
    }
      
  }
}
