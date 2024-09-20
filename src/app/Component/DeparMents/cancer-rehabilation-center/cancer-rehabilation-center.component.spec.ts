import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancerRehabilationCenterComponent } from './cancer-rehabilation-center.component';

describe('CancerRehabilationCenterComponent', () => {
  let component: CancerRehabilationCenterComponent;
  let fixture: ComponentFixture<CancerRehabilationCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancerRehabilationCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancerRehabilationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
