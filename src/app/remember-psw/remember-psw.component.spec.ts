import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberPswComponent } from './remember-psw.component';

describe('RememberPswComponent', () => {
  let component: RememberPswComponent;
  let fixture: ComponentFixture<RememberPswComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RememberPswComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RememberPswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
