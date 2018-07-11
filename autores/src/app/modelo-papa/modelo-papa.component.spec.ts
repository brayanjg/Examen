import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloPapaComponent } from './modelo-papa.component';

describe('ModeloPapaComponent', () => {
  let component: ModeloPapaComponent;
  let fixture: ComponentFixture<ModeloPapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloPapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloPapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
