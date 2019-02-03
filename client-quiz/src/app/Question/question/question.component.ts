import { Component, OnInit } from '@angular/core';
 
import { AddCategory } from '../../model/add-category';
import { CategoryType } from '../../model/category-type';
import { CategoryServiceService } from '../../service/category-service.service';
//import { QuestionServiceService } from '../../service/question-service.service';
import { Question } from '../../model/question';
import { Answer } from '../../model/answer';
import { QuestionServiceService } from '../../Service/question-service.service';
import { Form, NgForm } from '@angular/forms';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public getCatInfo: Array<AddCategory> = [];
  public setCatType: Array<CategoryType> = [];
  public categoryName: String;
  public setDataCatType;
  public QuestionName;
  public answer: Array<String> = [];
  public x;
  public flag: boolean = false;
  public subcategory: Array<String> = [];
  question: Question;
  answerObject : Answer;
  public checkRadio : boolean =false;
  public checkCheck : boolean ;
    temp :Question;
  theCheckbox =false;
  constructor(private categorySer: CategoryServiceService,private questionSer :QuestionServiceService) {
    this.question = new Question();
    this.answerObject = new Answer();
  }
  ngOnInit() {
    this.categorySer.getCategoryInfo().subscribe(getResultList => {
      this.getCatInfo = getResultList;

      this.checkCheck=true;
     
    })
       //
    this.subcategory = ['Single Question Single Answer', 'Single Question Multiple Answer'];
  }
  addfield() {
    let ans = new Answer();
    this.question.options.push(ans);
    this.answer[this.question.options.length];
  }
  saveFunction() {
    console.log("--------------------hhhh " +this.question)
           
    if( this.question.questionCategory == undefined &&  this.question.subcategory == undefined  && this.question.questionText.length < 20)
    {
                      alert("please Select Category And Question Type")
                    return ;
    }
    else
    {
      this.questionSer.addQuestion(this.question).subscribe(getAllQuestionData =>{
        this.temp=getAllQuestionData;
       
        alert(this.question.questionId+"Question Id");
        alert(this.question.questionText+ "QuestionText");
        alert(this.question.subcategory + "Question SubCategory");
      
        console.log("------------->" +this.temp)
       }) 

    }   
    
  }
  setradiocorrect(ans) {
 
    alert("Correct Answer is :"  + ans.answerCorrect);

   // ans.answerCorrect =!ans.answerCorrect;
   // console.log("check" + ans.answerCorrect)
  }
  setchkcorrect(ans){
      ans.answerCorrect =!ans.answerCorrect;
      console.log(ans.answerCorrect);
  }
  toggleVisibility(e){
    if(this.checkCheck == true){
      this.checkCheck=false;

    }else
    this.checkCheck=true;
    
  }
  resetVal(getForm : NgForm){
    getForm.reset()
  }
}
