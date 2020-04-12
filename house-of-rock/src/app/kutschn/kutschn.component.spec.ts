import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KutschnComponent } from './kutschn.component';

describe('KutschnComponent', () => {
  let component: KutschnComponent;
  let fixture: ComponentFixture<KutschnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KutschnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KutschnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
