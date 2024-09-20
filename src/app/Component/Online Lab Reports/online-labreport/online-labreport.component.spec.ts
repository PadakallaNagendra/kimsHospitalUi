import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineLabreportComponent } from './online-labreport.component';

describe('OnlineLabreportComponent', () => {
  let component: OnlineLabreportComponent;
  let fixture: ComponentFixture<OnlineLabreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineLabreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineLabreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
