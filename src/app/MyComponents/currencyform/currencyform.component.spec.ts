import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyformComponent } from './currencyform.component';

describe('CurrencyformComponent', () => {
  let component: CurrencyformComponent;
  let fixture: ComponentFixture<CurrencyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
