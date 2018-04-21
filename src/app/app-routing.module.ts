import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import {QuizGeneratorHomeComponent} from './quiz-generator-home/quiz-generator-home.component'
import {TakeQuizComponent} from './take-quiz/take-quiz.component'
import {AddQuestionComponent} from './add-question/add-question.component'

const routes:Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:QuizGeneratorHomeComponent},
  {path:'add-question', component:AddQuestionComponent},
  {path:'take-quiz', component:TakeQuizComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ] 
})
export class AppRoutingModule { }
