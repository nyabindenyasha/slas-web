import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureProgramsComponent } from './capture-programs.component';

describe('CaptureProgramsComponent', () => {
  let component: CaptureProgramsComponent;
  let fixture: ComponentFixture<CaptureProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
