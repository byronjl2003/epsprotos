import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreacionComponent } from './modal-creacion.component';

describe('ModalCreacionComponent', () => {
  let component: ModalCreacionComponent;
  let fixture: ComponentFixture<ModalCreacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
