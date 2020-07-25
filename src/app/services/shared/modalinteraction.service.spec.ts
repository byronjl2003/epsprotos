import { TestBed } from '@angular/core/testing';

import { ModalinteractionService } from './modalinteraction.service';

describe('ModalinteractionService', () => {
  let service: ModalinteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalinteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
