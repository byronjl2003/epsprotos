import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ServiceModule} from 'src/app/services/service.module';

import {DrawerComponent} from './drawer.component';

xdescribe('DrawerComponent', () => {
  let component: DrawerComponent;
  let fixture: ComponentFixture<DrawerComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule(
            {declarations: [DrawerComponent], imports: [ServiceModule]})
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
