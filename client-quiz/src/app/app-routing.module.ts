import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AdduserComponent } from './User/adduser/adduser.component';
import { ProgressComponent } from './progress/progress.component';
import { ViewCategoryComponent } from './displayCategory/view-category/view-category.component';
import { AddUpdateDeleteCategoryComponent } from './Category/add-update-delete-category/add-update-delete-category.component';
import { QuestionComponent } from './Question/question/question.component';
import { QuestionListComponent } from './AllQuestion/question-list/question-list.component';
import { ViewQuestionPaperComponent } from './view-question-paper/view-question-paper.component';
import { AdminLoginComponent } from './adminLogin/admin-login/admin-login.component';
import { TakeTestComponent } from './Test/take-test/take-test.component';




const routes: Routes = [
   
    {
    path: 'progress', component: ProgressComponent
  },
  {
    path: 'viewCategory', component: ViewCategoryComponent
  }

  , {
    path: 'addCategory', component: AddUpdateDeleteCategoryComponent
  }
  ,
  {
    path: 'addQuestions', component: QuestionComponent
  },
  {
    path: 'addUser', component: AdduserComponent
  }, {

    path: 'displayQuestion', component: QuestionListComponent
  }
  , {
    path: 'attemptQuestions', component: ViewQuestionPaperComponent
  },
  {
    path: 'viewCategory/editCategory/:categoryId', component: AddUpdateDeleteCategoryComponent
  }, {
    path: 'adminLogin', component: AdminLoginComponent
  },  {
    path: 'userPaper', component: TakeTestComponent
  },
  {
    path: 'home', component: NavigationBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
