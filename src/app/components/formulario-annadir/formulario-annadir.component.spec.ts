import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAnnadirComponent } from './formulario-annadir.component';

describe('FormularioAnnadirComponent', () => {
  let component: FormularioAnnadirComponent;
  let fixture: ComponentFixture<FormularioAnnadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAnnadirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAnnadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
