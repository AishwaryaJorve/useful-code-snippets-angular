import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesDiffernceComponent } from './dates-differnce.component';

describe('DatesDiffernceComponent', () => {
  let component: DatesDiffernceComponent;
  let fixture: ComponentFixture<DatesDiffernceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatesDiffernceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesDiffernceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
