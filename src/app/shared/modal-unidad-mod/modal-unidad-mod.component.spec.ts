import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUnidadModComponent } from './modal-unidad-mod.component';

describe('ModalUnidadModComponent', () => {
  let component: ModalUnidadModComponent;
  let fixture: ComponentFixture<ModalUnidadModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUnidadModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUnidadModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
