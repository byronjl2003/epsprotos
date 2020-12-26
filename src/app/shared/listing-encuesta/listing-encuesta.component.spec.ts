import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListingEncuestaComponent} from './listing-encuesta.component';

xdescribe('ListingEncuestaComponent', () => {
  let component: ListingEncuestaComponent;
  let fixture: ComponentFixture<ListingEncuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [ListingEncuestaComponent]})
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
