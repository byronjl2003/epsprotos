import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoresClimaComponent } from './factores-clima.component';

describe('FactoresClimaComponent', () => {
  let component: FactoresClimaComponent;
  let fixture: ComponentFixture<FactoresClimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoresClimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoresClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
