import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CorrelacionesComponent} from './correlaciones.component';

describe('CorrelacionesComponent', () => {
  let component: CorrelacionesComponent;
  let fixture: ComponentFixture<CorrelacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [CorrelacionesComponent]})
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrelacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
