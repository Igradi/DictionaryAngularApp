import { TestBed } from '@angular/core/testing';

import { TopWordsService } from './top-words.service';

describe('TopWordsService', () => {
  let service: TopWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
