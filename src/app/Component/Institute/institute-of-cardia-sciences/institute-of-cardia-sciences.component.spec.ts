import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteOfCardiaSciencesComponent } from './institute-of-cardia-sciences.component';

describe('InstituteOfCardiaSciencesComponent', () => {
  let component: InstituteOfCardiaSciencesComponent;
  let fixture: ComponentFixture<InstituteOfCardiaSciencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteOfCardiaSciencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteOfCardiaSciencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
