import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SharedModule} from 'src/app/shared/shared.module';

import {FactoresClimaComponent} from './factores-clima.component';

xdescribe('FactoresClimaComponent', () => {
  let component: FactoresClimaComponent;
  let fixture: ComponentFixture<FactoresClimaComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule(
            {declarations: [FactoresClimaComponent], imports: [SharedModule]})
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoresClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
