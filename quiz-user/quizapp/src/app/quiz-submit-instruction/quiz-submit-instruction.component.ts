import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TakeTestComponent } from '../Test/take-test/take-test.component';
import { Dialog } from '../dialog';

@Component({
  selector: 'app-quiz-submit-instruction',
  templateUrl: './quiz-submit-instruction.component.html',
  styleUrls: ['./quiz-submit-instruction.component.css']
})
export class QuizSubmitInstructionComponent implements OnInit {
 
  constructor(public dialogRef: MatDialogRef<TakeTestComponent>, @Inject(MAT_DIALOG_DATA)public d : Dialog)  {
     
  }
  ngOnInit() {
  }

}
