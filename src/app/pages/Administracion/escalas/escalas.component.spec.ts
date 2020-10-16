import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SharedModule} from 'src/app/shared/shared.module'

import {EscalasComponent} from './escalas.component';

xdescribe('EscalasComponent', () => {
  let component: EscalasComponent;
  let fixture: ComponentFixture<EscalasComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule(
            {declarations: [EscalasComponent], imports: [SharedModule]})
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
