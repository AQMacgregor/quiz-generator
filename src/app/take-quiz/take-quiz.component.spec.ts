import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionService } from '../question.service'
import { TakeQuizComponent } from './take-quiz.component';

describe('TakeQuizComponent', () => {
  let component: TakeQuizComponent;
  let fixture: ComponentFixture<TakeQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeQuizComponent ],
      providers: [QuestionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('ask questions', () => {
    const compiled = fixture.debugElement.nativeElement;
    // Questions are asked at random so just make sure we have one
    expect(compiled.querySelector('div#question').textContent).not.toBe('');
  });
  it('doesnt show answers before asked', () =>{
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div#answer').textContent).toBe('');
  });
  it('show answers', () => {
    component.showAnswer()
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div#answer').textContent).not.toBe('');
  });
  it('show new questions', () => {
    const compiled = fixture.debugElement.nativeElement;
    // Questions are asked at random so just make sure we have one
    let firstQ = compiled.querySelector('div#question').textContent;
    component.nextQuestion()
    fixture.detectChanges();
    expect(compiled.querySelector('div#question').textContent).not.toBe(firstQ);
  });
  it('inform when no more questions remain', () => {
    while(component.questionsToAsk.length > 0){
      component.nextQuestion();
    }
    component.nextQuestion();
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('div#question').textContent).toBe('');
    expect(compiled.querySelector('div#answer').textContent).toBe('');
    expect(compiled.querySelector('div#message').textContent).toBe(component.MESSAGE);

  });
});
