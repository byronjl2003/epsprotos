import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CardClimaComponent} from 'src/app/shared/card-clima/card-clima.component';

import {ResumenComponent} from './resumen.component';

xdescribe('ResumenComponent', () => {
  let component: ResumenComponent;
  let fixture: ComponentFixture<ResumenComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule(
            {declarations: [ResumenComponent, CardClimaComponent]})
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
