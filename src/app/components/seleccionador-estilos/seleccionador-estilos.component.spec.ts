import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionadorEstilosComponent } from './seleccionador-estilos.component';

describe('SeleccionadorEstilosComponent', () => {
  let component: SeleccionadorEstilosComponent;
  let fixture: ComponentFixture<SeleccionadorEstilosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionadorEstilosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionadorEstilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
