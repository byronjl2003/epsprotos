import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MiClimaComponent} from './mi-clima.component';

xdescribe('MiClimaComponent', () => {
  let component: MiClimaComponent;
  let fixture: ComponentFixture<MiClimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [MiClimaComponent]})
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
