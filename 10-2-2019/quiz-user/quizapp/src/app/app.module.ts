import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './Login/login/login.component';
import { ContactComponent } from './ContactUs/contact/contact.component';
import { TakeTestComponent } from './Test/take-test/take-test.component';
import { AboutUsComponent } from './About/about-us/about-us.component';
import { HeaderComponent } from './Header/header/header.component';
import { FooterComponent } from './Footer/footer/footer.component';
 import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { LoginServiceService } from './Service/login-service.service';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { QuizComponent } from './quiz/quiz.component';
import { QuizInstructionComponent } from './quiz-instruction/quiz-instruction.component';
import { CountdownModule } from 'ngx-countdown';
import { QuizSubmitInstructionComponent } from './quiz-submit-instruction/quiz-submit-instruction.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import {MatDialogModule} from "@angular/material";
import { Ng2GaugeModule } from 'ng2-gauge';
import { RegistrationComponent } from './registration/registration.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    TakeTestComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    QuizComponent,
    QuizInstructionComponent,
    QuizSubmitInstructionComponent,
    QuizResultComponent,
    RegistrationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule ,
    MatIconModule,
    HttpClientModule,
    NgxPaginationModule,
    MatCardModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    CountdownModule,
     MatDialogModule,
     Ng2GaugeModule,
     MatSelectModule
 

     
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent],
  entryComponents:[
    QuizSubmitInstructionComponent,QuizResultComponent,RegistrationComponent 
  ]
})
export class AppModule { }
