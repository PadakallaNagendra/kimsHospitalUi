import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajamundryComponent } from './rajamundry.component';

describe('RajamundryComponent', () => {
  let component: RajamundryComponent;
  let fixture: ComponentFixture<RajamundryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RajamundryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RajamundryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
