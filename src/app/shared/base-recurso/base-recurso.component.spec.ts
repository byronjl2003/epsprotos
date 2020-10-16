import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BaseRecursoComponent} from './base-recurso.component';

xdescribe('BaseRecursoComponent', () => {
  let component: BaseRecursoComponent;
  let fixture: ComponentFixture<BaseRecursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [BaseRecursoComponent]})
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
