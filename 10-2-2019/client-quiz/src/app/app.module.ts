import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatMenuModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CategoryServiceService } from './service/category-service.service';
import { LoginServiceService } from './service/login-service.service';
import { PaperQuestionService } from './service/paper-question.service';
import { PaperServiceService } from './service/paper-service.service';
//import { QuestionServiceService } from './service/question-service.service';
import { ResultService } from './service/result.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AdduserComponent } from './User/adduser/adduser.component';
import { HttpClientModule } from '@angular/common/http';
import { ProgressComponent } from './progress/progress.component';
import { DatePipe } from '@angular/common';
import { ViewCategoryComponent } from './displayCategory/view-category/view-category.component';
import { AddUpdateDeleteCategoryComponent } from './Category/add-update-delete-category/add-update-delete-category.component';
import { QuestionComponent } from './Question/question/question.component';
import { QuestionListComponent } from './AllQuestion/question-list/question-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ViewQuestionPaperComponent } from './view-question-paper/view-question-paper.component';
import { AdminLoginComponent } from './adminLogin/admin-login/admin-login.component';
import { TakeTestComponent } from './Test/take-test/take-test.component';
import { QuestionServiceService } from './Service/question-service.service';
import {MatDialogModule} from '@angular/material/dialog';
 

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AdduserComponent,
    ProgressComponent,
    ViewCategoryComponent,
    AddUpdateDeleteCategoryComponent,
    QuestionComponent,
    QuestionListComponent,
    ViewQuestionPaperComponent,
    AdminLoginComponent,
    TakeTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTableModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatDialogModule,
    BrowserAnimationsModule
   
  ],
  providers: [CategoryServiceService, LoginServiceService, PaperQuestionService, PaperServiceService, QuestionServiceService, ResultService, DatePipe],
  bootstrap: [AppComponent],
  entryComponents : [
    ViewCategoryComponent
  ]
})
export class AppModule { }
