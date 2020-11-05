import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureDepartmentComponent } from './capture-department.component';

describe('CaptureDepartmentComponent', () => {
  let component: CaptureDepartmentComponent;
  let fixture: ComponentFixture<CaptureDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
