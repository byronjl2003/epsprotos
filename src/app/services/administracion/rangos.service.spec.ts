import {TestBed} from '@angular/core/testing';

import {RangosService} from './rangos.service';

xdescribe('RangosService', () => {
  let service: RangosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RangosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
