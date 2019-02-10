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
  public questionLitsCheckedOrNotChecked = {};
  public categorySelectvalue;
  submitted  :boolean= false;
  public countDisplay : boolean = false;
  public countQuestionSelected : number = 0;
  filter: boolean= false;
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
       if(this.questionForm.valid){
                    
                      this.questSer.getCategoryInfo(this.questionForm.value.selectQuestion).subscribe(getList =>{
                      this.getQuestionLits=getList;

                      for (let i = 0; i < this.getQuestionLits.length; i++) {
                        this.questionLitsCheckedOrNotChecked[this.getQuestionLits[i].questionId] = false;
                    }
                    console.log("scsccdccdacaca"+this.questionLitsCheckedOrNotChecked);
                      if(this.getQuestionLits.length === 0){
                        this.visible=true
                       alert("No Record Found !!!" )
                      }
                      alert("Total Question is  :" + this.getQuestionLits.length)
                      this.categorySelectvalue=this.questionForm.value.selectQuestion;
                   })
       }
 
        
  }
  
  change(questionId){   
    this.questionLitsCheckedOrNotChecked[questionId] = !this.questionLitsCheckedOrNotChecked[questionId];       
    if(!this.paper.paperQuestionList.some((item) => item.paperQuestionId == questionId) && this.questionLitsCheckedOrNotChecked[questionId])
    {
      let pq = new PaperQuestion();  
      pq.paperSelectQuestionId=questionId; 
      this.paper.paperQuestionList.push(pq);
    }
    else{
      
        this.paper.paperQuestionList.forEach((paperQuestion, index) => {
          if(paperQuestion.paperSelectQuestionId==questionId)
          {
            console.log("index is "+index);
            if (index !== -1) {
              this.paper.paperQuestionList.splice(index, 1);
          }  
          }
      });
    } 
     
    console.log("jai mataji "+this.paper.paperQuestionList.length);

    this.countDisplay = true;
    this.countQuestionSelected = this.countQuestionSelected + 1;

    this.paper.paperCategory=this.questionForm.value.selectQuestion; 

    

    alert(this.paper.paperQuestionList.length)


  } 
 temp(){
         this.paperQuestion.addPaperQuestion(this.paper).subscribe(f => {
         alert("List Length is :" +this.paper.paperQuestionList.length)
 
         
     })
  
 }
  


}
