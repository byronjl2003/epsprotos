import {TestBed} from '@angular/core/testing';

import {DrawerinteractionService} from './drawerinteraction.service';

xdescribe('DrawerinteractionService', () => {
  let service: DrawerinteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrawerinteractionService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
