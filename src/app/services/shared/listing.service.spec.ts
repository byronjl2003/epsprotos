import {TestBed} from '@angular/core/testing';

import {ListingService} from './listing.service';

xdescribe('ListingService', () => {
  let service: ListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListingService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
