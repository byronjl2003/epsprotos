import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SharedModule} from 'src/app/shared/shared.module'

import {FormulariosComponent} from './formularios.component';

xdescribe('FormulariosComponent', () => {
  let component: FormulariosComponent;
  let fixture: ComponentFixture<FormulariosComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule(
            {declarations: [FormulariosComponent], imports: [SharedModule]})
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
