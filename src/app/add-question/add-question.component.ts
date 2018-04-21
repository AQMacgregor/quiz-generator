import { Component, OnInit, Input } from '@angular/core';
import {Question} from '../question';
import { QuestionService } from '../question.service'

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  @Input() question:Question;
  MESSAGE:string = 'Question successfully added';
  message:string;
  constructor(private questionService: QuestionService) { }
  addQuestion(){
    this.questionService.addQuestion(this.question);
    this.question = new Question;
    this.message = this.MESSAGE
  }
  ngOnInit() {
    this.question = new Question;
  }

}
