import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesBreakdownComponent } from './expenses-breakdown.component';

describe('ExpensesBreakdownComponent', () => {
  let component: ExpensesBreakdownComponent;
  let fixture: ComponentFixture<ExpensesBreakdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensesBreakdownComponent]
    });
    fixture = TestBed.createComponent(ExpensesBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
