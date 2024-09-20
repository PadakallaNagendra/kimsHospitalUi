import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalPatientComponent } from './international-patient.component';

describe('InternationalPatientComponent', () => {
  let component: InternationalPatientComponent;
  let fixture: ComponentFixture<InternationalPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
