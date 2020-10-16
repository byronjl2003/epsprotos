import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SharedModule} from 'src/app/shared/shared.module'
import {RangosComponent} from './rangos.component';

xdescribe('RangosComponent', () => {
  let component: RangosComponent;
  let fixture: ComponentFixture<RangosComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule(
            {declarations: [RangosComponent], imports: [SharedModule]})
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
