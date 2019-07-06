import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriadsComponent } from './triads.component';

describe('TriadsComponent', () => {
  let component: TriadsComponent;
  let fixture: ComponentFixture<TriadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
