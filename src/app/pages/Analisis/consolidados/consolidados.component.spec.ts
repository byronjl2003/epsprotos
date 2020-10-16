import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SharedModule} from 'src/app/shared/shared.module';

import {ConsolidadosComponent} from './consolidados.component';

describe('ConsolidadosComponent', () => {
  let component: ConsolidadosComponent;
  let fixture: ComponentFixture<ConsolidadosComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule(
            {declarations: [ConsolidadosComponent], imports: [SharedModule]})
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
