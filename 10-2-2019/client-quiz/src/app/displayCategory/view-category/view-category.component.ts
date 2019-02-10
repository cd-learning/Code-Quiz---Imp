import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../../service/category-service.service';
import { AddCategory } from '../../model/add-category';
import { CategoryType } from '../../model/category-type';
import { Router } from '@angular/router'; 
//import { QuestionServiceService } from '../../Service/question-service.service';
import { Question } from '../../model/question';
import { QuestionServiceService } from '../../Service/question-service.service';
 
@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  public getCatInfo : Array<AddCategory> = [];
  public setCatType : Array<CategoryType> = [];
  public categoryName : String;
  public questionObj : Question;
  constructor(private categorySer : CategoryServiceService,private router : Router,private questionSer : QuestionServiceService) { }
  public heroes : Array<String>=[];
  displayedColumns: string[] = ['catId','catName','up','del'];
  
  ngOnInit() { 
    this.categorySer.getCategoryInfo().subscribe(getResultList => {
      this.getCatInfo=getResultList;
    })
 }

 delCat(delCategoryId){
  if(confirm("Are you sure to delete Quiz Category : "+delCategoryId)) {
      this.categorySer.deleteCategoryInfo(delCategoryId).subscribe(delCatIdRes => {
      alert("SuccessFully Delete" +  delCategoryId);   
        this.questionSer.deleQuestionAndAnswerBaseCategory(delCategoryId).subscribe(gerRestltDelCat => {
              
          this.categorySer.getCategoryInfo().subscribe(getResultList => {
            this.getCatInfo=getResultList;
          })
        })
      
     })
  }   
  else {
        this.router.navigate(['/viewCategory']); 
       } 
   } 
}
