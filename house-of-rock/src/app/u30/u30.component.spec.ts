import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U30Component } from './u30.component';

describe('U30Component', () => {
  let component: U30Component;
  let fixture: ComponentFixture<U30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
