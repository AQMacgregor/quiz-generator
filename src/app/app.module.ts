import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuizGeneratorHomeComponent } from './quiz-generator-home/quiz-generator-home.component';

import { QuestionService } from './question.service';

import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent, 
    TakeQuizComponent,
    AddQuestionComponent,
    QuizGeneratorHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
