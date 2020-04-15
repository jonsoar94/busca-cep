import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCepComponent } from './detalhes-cep.component';

describe('DetalhesCepComponent', () => {
  let component: DetalhesCepComponent;
  let fixture: ComponentFixture<DetalhesCepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesCepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
