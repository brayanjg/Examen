import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPadreComponent } from './card-padre.component';

describe('CardPadreComponent', () => {
  let component: CardPadreComponent;
  let fixture: ComponentFixture<CardPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
