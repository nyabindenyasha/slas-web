import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureTimeSlotsComponent } from './capture-time-slots.component';

describe('CaptureTimeSlotsComponent', () => {
  let component: CaptureTimeSlotsComponent;
  let fixture: ComponentFixture<CaptureTimeSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureTimeSlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureTimeSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
