import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldefinitivoComponent } from './modaldefinitivo.component';

describe('ModaldefinitivoComponent', () => {
  let component: ModaldefinitivoComponent;
  let fixture: ComponentFixture<ModaldefinitivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaldefinitivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaldefinitivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
