import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffStringDatesComponent } from './diff-string-dates.component';

describe('DiffStringDatesComponent', () => {
  let component: DiffStringDatesComponent;
  let fixture: ComponentFixture<DiffStringDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffStringDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffStringDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
