import {HttpClientModule} from '@angular/common/http'
import {TestBed} from '@angular/core/testing';

import {UsuariosService} from './usuarios.service';

xdescribe('UsuariosService', () => {
  let service: UsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule(
        {declarations: [], imports: [HttpClientModule]});
    service = TestBed.inject(UsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
