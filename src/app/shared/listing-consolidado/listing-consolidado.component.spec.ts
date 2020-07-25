import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingConsolidadoComponent } from './listing-consolidado.component';

describe('ListingConsolidadoComponent', () => {
  let component: ListingConsolidadoComponent;
  let fixture: ComponentFixture<ListingConsolidadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingConsolidadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingConsolidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
