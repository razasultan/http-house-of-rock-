import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamstagComponent } from './samstag.component';

describe('SamstagComponent', () => {
  let component: SamstagComponent;
  let fixture: ComponentFixture<SamstagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamstagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamstagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
