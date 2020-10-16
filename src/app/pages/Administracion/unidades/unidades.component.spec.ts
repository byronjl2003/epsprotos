import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {ServiceModule} from 'src/app/services/service.module';
import {SharedModule} from 'src/app/shared/shared.module';

import {UnidadesComponent} from './unidades.component';

describe('UnidadesComponent', () => {
  let component: UnidadesComponent;
  let fixture: ComponentFixture<UnidadesComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [UnidadesComponent],
          imports: [ServiceModule, SharedModule, NzDrawerModule]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadesComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
