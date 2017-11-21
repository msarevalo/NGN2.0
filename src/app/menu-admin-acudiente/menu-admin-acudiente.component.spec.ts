import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAdminAcudienteComponent } from './menu-admin-acudiente.component';

describe('MenuAdminAcudienteComponent', () => {
  let component: MenuAdminAcudienteComponent;
  let fixture: ComponentFixture<MenuAdminAcudienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAdminAcudienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAdminAcudienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
