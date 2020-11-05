import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlasHomeComponent } from './slas-home.component';

describe('SlasHomeComponent', () => {
  let component: SlasHomeComponent;
  let fixture: ComponentFixture<SlasHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlasHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
