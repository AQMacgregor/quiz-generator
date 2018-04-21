import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { QuestionService } from '../question.service'
import { FormsModule } from '@angular/forms';
import { AddQuestionComponent } from './add-question.component';

describe('AddQuestionComponent', () => {
  let component: AddQuestionComponent;
  let fixture: ComponentFixture<AddQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuestionComponent ],
      imports:[FormsModule],
      providers: [QuestionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { 
    expect(component).toBeTruthy();
  });
  it('add new questions', inject([QuestionService], (service: QuestionService) =>{
    let countBefore = service.getQuestions().length
    component.question.question = 'New Question';
    component.question.answer = 'New Answer';
    component.addQuestion()
    expect(service.getQuestions().length).toBe(countBefore + 1)
  }));
  it('inform when question added', () =>{
    component.question.question = 'Another New Question';
    component.question.answer = 'Another New Answer';
    component.addQuestion()
    fixture.detectChanges();
    expect(component.question.question).toBeUndefined();
    expect(component.question.answer).toBeUndefined();
    expect(component.message).toBe(component.MESSAGE);
  });
  it('not add an invalid question', inject([QuestionService], (service: QuestionService) =>{
    component.question.question = '';
    component.question.answer = '';
    let countBefore = service.getQuestions().length
    component.addQuestion()
    expect(service.getQuestions().length).toBe(countBefore)
    component.question.question = 'Yet Another New Question';
    component.addQuestion()
    expect(service.getQuestions().length).toBe(countBefore)
  }))
});
