import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnastiologistComponent } from './anastiologist.component';

describe('AnastiologistComponent', () => {
  let component: AnastiologistComponent;
  let fixture: ComponentFixture<AnastiologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnastiologistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnastiologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
