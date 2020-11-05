import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureAppointmentComponent } from './capture-appointment.component';

describe('CaptureAppointmentComponent', () => {
  let component: CaptureAppointmentComponent;
  let fixture: ComponentFixture<CaptureAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
