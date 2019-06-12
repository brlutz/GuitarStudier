import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFlashcardComponent } from './note-flashcard.component';

describe('NoteFlashcardComponent', () => {
  let component: NoteFlashcardComponent;
  let fixture: ComponentFixture<NoteFlashcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteFlashcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteFlashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
