import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsRankedListComponent } from './words-ranked-list.component';

describe('WordsRankedListComponent', () => {
  let component: WordsRankedListComponent;
  let fixture: ComponentFixture<WordsRankedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordsRankedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsRankedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
