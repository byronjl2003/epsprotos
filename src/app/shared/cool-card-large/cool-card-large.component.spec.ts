import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoolCardLargeComponent} from './cool-card-large.component';

xdescribe('CoolCardLargeComponent', () => {
  let component: CoolCardLargeComponent;
  let fixture: ComponentFixture<CoolCardLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [CoolCardLargeComponent]})
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolCardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
