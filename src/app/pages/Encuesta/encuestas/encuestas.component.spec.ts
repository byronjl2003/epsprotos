import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SharedModule} from 'src/app/shared/shared.module'

import {EncuestasComponent} from './encuestas.component';

xdescribe('EncuestasComponent', () => {
  let component: EncuestasComponent;
  let fixture: ComponentFixture<EncuestasComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule(
            {declarations: [EncuestasComponent], imports: [SharedModule]})
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
