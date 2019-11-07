import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiocontrasenaComponent } from './cambiocontrasena.component';

describe('CambiocontrasenaComponent', () => {
  let component: CambiocontrasenaComponent;
  let fixture: ComponentFixture<CambiocontrasenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiocontrasenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiocontrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
