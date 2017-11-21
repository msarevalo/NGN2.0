import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDecenteAcudienteComponent } from './menu-docente-acudiente.component';

describe('MenuDecenteAcudienteComponent', () => {
  let component: MenuDecenteAcudienteComponent;
  let fixture: ComponentFixture<MenuDecenteAcudienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDecenteAcudienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDecenteAcudienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
