import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { ContactComponent } from './ContactUs/contact/contact.component';
import { LoginComponent } from './Login/login/login.component';
import { QuizInstructionComponent } from './quiz-instruction/quiz-instruction.component';

const routes: Routes = [{
  path : '',component : HomeComponent
},
{
  path : 'contactUs',component :ContactComponent
},
{
  path : 'login',component:LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
