import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloHijoComponent } from './modelo-hijo.component';

describe('ModeloHijoComponent', () => {
  let component: ModeloHijoComponent;
  let fixture: ComponentFixture<ModeloHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
