import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarcitaComponent } from './cambiarcita.component';

describe('CambiarcitaComponent', () => {
  let component: CambiarcitaComponent;
  let fixture: ComponentFixture<CambiarcitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarcitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarcitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
