import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearModelComponent } from './clear-model.component';

describe('ClearModelComponent', () => {
  let component: ClearModelComponent;
  let fixture: ComponentFixture<ClearModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
