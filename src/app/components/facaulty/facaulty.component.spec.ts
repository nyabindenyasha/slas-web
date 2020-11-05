import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacaultyComponent } from './facaulty.component';

describe('FacaultyComponent', () => {
  let component: FacaultyComponent;
  let fixture: ComponentFixture<FacaultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacaultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacaultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
