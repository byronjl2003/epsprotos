import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CardClimaComponent} from './card-clima.component';

xdescribe('CardClimaComponent', () => {
  let component: CardClimaComponent;
  let fixture: ComponentFixture<CardClimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [CardClimaComponent]})
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
