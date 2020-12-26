import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingPagFormulariosComponent } from './listing-pag-formularios.component';

describe('ListingPagFormulariosComponent', () => {
  let component: ListingPagFormulariosComponent;
  let fixture: ComponentFixture<ListingPagFormulariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingPagFormulariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingPagFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
