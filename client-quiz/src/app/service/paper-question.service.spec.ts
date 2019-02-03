import { TestBed } from '@angular/core/testing';

import { PaperQuestionService } from './paper-question.service';

describe('PaperQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaperQuestionService = TestBed.get(PaperQuestionService);
    expect(service).toBeTruthy();
  });
});
