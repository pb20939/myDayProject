import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightformComponent } from './weightform.component';

describe('WeightformComponent', () => {
  let component: WeightformComponent;
  let fixture: ComponentFixture<WeightformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
