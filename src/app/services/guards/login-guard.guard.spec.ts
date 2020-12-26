import {async, inject, TestBed} from '@angular/core/testing';
import {RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing'
import {ServiceModule} from 'src/app/services/service.module';

import {LoginGuardGuard} from './login-guard.guard';

xdescribe('LoginGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:
          [ServiceModule, RouterModule, RouterTestingModule.withRoutes([])],
      providers: [LoginGuardGuard]
    });
  });

  it('should ...', inject([LoginGuardGuard], (guard: LoginGuardGuard) => {
       expect(guard).toBeTruthy();
     }));
});
