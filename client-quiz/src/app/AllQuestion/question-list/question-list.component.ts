import { Component, OnInit } from '@angular/core';
import { AddCategory } from '../../model/add-category';
 
import { CategoryServiceService } from '../../service/category-service.service';
import { Paper } from '../../model/paper';
import { PaperQuestionService } from '../../service/paper-question.service';
import { PaperQuestion } from '../../model/paper-question';
import { Question } from '../../model/question';
import { QuestionServiceService } from '../../Service/question-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
 @Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  public getCatInfo: Array<AddCategory> = [];
  public getQuestionLits : Array<Question> =[];
  public categorySelectvalue;
  submitted  :boolean= false;

  public visible =false;
    question: Question;
    testBoolean :boolean;
    selectValueStore=[];
   public paper : Paper;
questionForm : FormGroup;

    constructor(private formBuilder  : FormBuilder,private categorySer: CategoryServiceService, private questSer: QuestionServiceService,private paperQuestion : PaperQuestionService) {
      this.question = new Question();
      this.paper = new Paper();
    }
  ngOnInit() {
    this.categorySer.getCategoryInfo().subscribe(getResultList => {
      this.getCatInfo = getResultList;
    })

    this.questionForm = this.formBuilder.group({
      selectQuestion : ['',Validators.required]
    })
 
  }
check()
{
  this.submitted=true;
  alert(this.submitted)
}

  //Get All Question list base on category Id...
  getQuestionList(){
         
    this.submitted=true;
    alert(this.submitted + ":" + this.questionForm.value.selectQuestion)
    debugger;
       if(this.questionForm.valid){
                    
                      this.questSer.getCategoryInfo(this.questionForm.value.selectQuestion).subscribe(getList =>{
                      this.getQuestionLits=getList;
                      if(this.getQuestionLits.length === 0){
                        this.visible=true
                       alert("No Record Found !!!" )
                      }
                      alert("Total Question is  :" + this.getQuestionLits.length)
                      this.categorySelectvalue=this.questionForm.value.selectQuestion;
                   })
       }
 
        
  }
  
  change(x){ 
    this.paper.paperCategory=this.questionForm.value.selectQuestion; 
    let pq = new PaperQuestion();  
      
     pq.paperSelectQuestionId=x; 
     this.paper.paperQuestionList.push(pq);
  } 
 temp(){
         this.paperQuestion.addPaperQuestion(this.paper).subscribe(f => {
         alert("List Length is :" +this.paper.paperQuestionList.length)
 
         
     })
  
 }
  


}
