import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayToStrComponent } from './array-to-str.component';

describe('ArrayToStrComponent', () => {
  let component: ArrayToStrComponent;
  let fixture: ComponentFixture<ArrayToStrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayToStrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayToStrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
