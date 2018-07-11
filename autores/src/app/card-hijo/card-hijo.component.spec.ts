import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHijoComponent } from './card-hijo.component';

describe('CardHijoComponent', () => {
  let component: CardHijoComponent;
  let fixture: ComponentFixture<CardHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
