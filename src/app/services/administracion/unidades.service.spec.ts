import {HttpClientModule} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';

import {UnidadesService} from './unidades.service';

xdescribe('UnidadesService', () => {
  let service: UnidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]

    });
    service = TestBed.inject(UnidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
