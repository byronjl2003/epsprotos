import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SharedModule} from 'src/app/shared/shared.module'

import {FactoresEstadisticosComponent} from './factores-estadisticos.component';

xdescribe('FactoresEstadisticosComponent', () => {
  let component: FactoresEstadisticosComponent;
  let fixture: ComponentFixture<FactoresEstadisticosComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [FactoresEstadisticosComponent],
          imports: [SharedModule]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoresEstadisticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
