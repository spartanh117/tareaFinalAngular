import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContonedorComponent } from './contonedor.component';

describe('ContonedorComponent', () => {
  let component: ContonedorComponent;
  let fixture: ComponentFixture<ContonedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContonedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContonedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
