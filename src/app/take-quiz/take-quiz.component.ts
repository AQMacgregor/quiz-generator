import { Component, OnInit } from '@angular/core';
import {Question} from '../question';
import {QuestionService} from '../question.service';

@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {
  questionsToAsk : Question[]
  questionVM : Question;
  question : Question;
  MESSAGE:string = 'No more questions available';
  message:string
  constructor(private questionService: QuestionService) { 
    this.questionVM = new Question
  }
  nextQuestion(){
    if(this.questionsToAsk.length > 0){
      let questionNumber = Math.floor((Math.random() * this.questionsToAsk.length));
      this.question=this.questionsToAsk.splice(questionNumber, 1)[0];
      this.questionVM.question = this.question.question
      delete this.questionVM.answer
    } else {
      this.questionVM = new Question
      this.question = new Question
      this.message = this.MESSAGE
    }
  }
  showAnswer(){
    this.questionVM.answer = this.question.answer
  }
  getQuestions(){
    this.questionsToAsk = this.questionService.getQuestions();
  }
  ngOnInit() {
    this.getQuestions();
    this.nextQuestion();
  }
}

