import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoresEstadisticosComponent } from './factores-estadisticos.component';

describe('FactoresEstadisticosComponent', () => {
  let component: FactoresEstadisticosComponent;
  let fixture: ComponentFixture<FactoresEstadisticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoresEstadisticosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoresEstadisticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
