import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ServiceModule} from 'src/app/services/service.module';

import {ListPagComponent} from './list-pag.component';

xdescribe('ListPagComponent', () => {
  let component: ListPagComponent;
  let fixture: ComponentFixture<ListPagComponent>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [ListPagComponent],
          imports: [ServiceModule]

        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
