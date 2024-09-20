import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnathpurComponent } from './anathpur.component';

describe('AnathpurComponent', () => {
  let component: AnathpurComponent;
  let fixture: ComponentFixture<AnathpurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnathpurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnathpurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
