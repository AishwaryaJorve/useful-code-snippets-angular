import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayAsynchCallComponent } from './array-asynch-call.component';

describe('ArrayAsynchCallComponent', () => {
  let component: ArrayAsynchCallComponent;
  let fixture: ComponentFixture<ArrayAsynchCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayAsynchCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayAsynchCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
