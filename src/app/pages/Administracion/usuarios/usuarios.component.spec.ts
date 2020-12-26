import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {SharedModule} from 'src/app/shared/shared.module'

import {UsuariosComponent} from './usuarios.component';

describe('UsuariosComponent', () => {
  let component: UsuariosComponent;
  let fixture: ComponentFixture<UsuariosComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [UsuariosComponent],
          imports: [SharedModule, NzDrawerModule]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
