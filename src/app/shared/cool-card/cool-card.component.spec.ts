import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoolCardComponent} from './cool-card.component';

xdescribe('CoolCardComponent', () => {
  let component: CoolCardComponent;
  let fixture: ComponentFixture<CoolCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [CoolCardComponent]})
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
