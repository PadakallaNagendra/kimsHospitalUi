import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFacilitiesComponent } from './service-facilities.component';

describe('ServiceFacilitiesComponent', () => {
  let component: ServiceFacilitiesComponent;
  let fixture: ComponentFixture<ServiceFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceFacilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
