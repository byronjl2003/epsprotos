import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUnidadComponent } from './modal-unidad.component';

describe('ModalUnidadComponent', () => {
  let component: ModalUnidadComponent;
  let fixture: ComponentFixture<ModalUnidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUnidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
