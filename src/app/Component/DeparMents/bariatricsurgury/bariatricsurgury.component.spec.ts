import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BariatricsurguryComponent } from './bariatricsurgury.component';

describe('BariatricsurguryComponent', () => {
  let component: BariatricsurguryComponent;
  let fixture: ComponentFixture<BariatricsurguryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BariatricsurguryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BariatricsurguryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
