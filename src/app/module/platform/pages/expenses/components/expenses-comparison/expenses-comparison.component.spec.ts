import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesComparisonComponent } from './expenses-comparison.component';

describe('ExpensesComparisonComponent', () => {
  let component: ExpensesComparisonComponent;
  let fixture: ComponentFixture<ExpensesComparisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensesComparisonComponent]
    });
    fixture = TestBed.createComponent(ExpensesComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
