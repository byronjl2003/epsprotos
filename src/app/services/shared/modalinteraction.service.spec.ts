import {TestBed} from '@angular/core/testing';

import {ModalinteractionService} from './modalinteraction.service';

xdescribe('ModalinteractionService', () => {
  let service: ModalinteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalinteractionService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
