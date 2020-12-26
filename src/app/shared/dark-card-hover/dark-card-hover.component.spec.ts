import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DarkCardHoverComponent} from './dark-card-hover.component';

xdescribe('DarkCardHoverComponent', () => {
  let component: DarkCardHoverComponent;
  let fixture: ComponentFixture<DarkCardHoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [DarkCardHoverComponent]})
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkCardHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
