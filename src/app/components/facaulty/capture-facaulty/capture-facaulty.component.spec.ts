import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureFacaultyComponent } from './capture-facaulty.component';

describe('CaptureFacaultyComponent', () => {
  let component: CaptureFacaultyComponent;
  let fixture: ComponentFixture<CaptureFacaultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureFacaultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureFacaultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
