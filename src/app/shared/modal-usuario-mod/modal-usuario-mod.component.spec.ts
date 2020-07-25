import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUsuarioModComponent } from './modal-usuario-mod.component';

describe('ModalUsuarioModComponent', () => {
  let component: ModalUsuarioModComponent;
  let fixture: ComponentFixture<ModalUsuarioModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUsuarioModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUsuarioModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
