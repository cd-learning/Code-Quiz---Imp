import { Component, OnInit, Inject } from '@angular/core';
import { QuizSubmitInstructionComponent } from '../quiz-submit-instruction/quiz-submit-instruction.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {
  input: number;
  constructor(private route: Router, public dialogRef: MatDialogRef<QuizSubmitInstructionComponent>, @Inject(MAT_DIALOG_DATA) public getRestult:
    any) { }
  ngOnInit() {
    this.input = 10 * this.getRestult.result;
    const max = 100;
    const sectors = [{
      from: 10,
      to: 50,
      color: 'red'
    }, {
      from: 50,
      to: 70,
      color: 'blue'
    }, {
      from: 70,
      to: 90,
      color: 'green'
    },{
      from: 70,
      to: 90,
      color: 'yellow'
    }];
  }
  resultSub() {
    localStorage.clear();

    this.dialogRef.close();
    this.route.navigate(["/home"]);
  }
}
