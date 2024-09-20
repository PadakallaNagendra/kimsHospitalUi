import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccedentComponent } from './accedent.component';

describe('AccedentComponent', () => {
  let component: AccedentComponent;
  let fixture: ComponentFixture<AccedentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccedentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccedentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
