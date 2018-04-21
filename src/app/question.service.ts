import { Injectable } from '@angular/core';
import { QUESTIONS } from './starting-questions';
import { Question } from './question';

@Injectable()
export class QuestionService {
  questions: Question[] = QUESTIONS;
  constructor() { 
  }
  getQuestions() : Question[]{
    return this.questions.slice();
  }
  addQuestion(question:Question){
    this.questions.push(question);
  }
}
