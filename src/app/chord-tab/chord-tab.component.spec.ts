import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordTabComponent } from './chord-tab.component';

describe('ChordTabComponent', () => {
  let component: ChordTabComponent;
  let fixture: ComponentFixture<ChordTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
