import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizGeneratorHomeComponent } from './quiz-generator-home.component';

describe('QuizGeneratorHomeComponent', () => {
  let component: QuizGeneratorHomeComponent;
  let fixture: ComponentFixture<QuizGeneratorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizGeneratorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizGeneratorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
