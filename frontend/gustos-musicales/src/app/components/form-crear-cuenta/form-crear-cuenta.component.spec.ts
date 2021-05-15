import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCrearCuentaComponent } from './form-crear-cuenta.component';

describe('FormCrearCuentaComponent', () => {
  let component: FormCrearCuentaComponent;
  let fixture: ComponentFixture<FormCrearCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCrearCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCrearCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
