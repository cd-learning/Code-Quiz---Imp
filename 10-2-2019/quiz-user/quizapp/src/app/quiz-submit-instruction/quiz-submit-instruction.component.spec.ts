import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSubmitInstructionComponent } from './quiz-submit-instruction.component';

describe('QuizSubmitInstructionComponent', () => {
  let component: QuizSubmitInstructionComponent;
  let fixture: ComponentFixture<QuizSubmitInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizSubmitInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSubmitInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
