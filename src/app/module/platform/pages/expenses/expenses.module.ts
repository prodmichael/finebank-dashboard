import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';
import { ExpensesHomeComponent } from './pages/expenses-home/expenses-home.component';

@NgModule({
  declarations: [ExpensesComponent, ExpensesHomeComponent],
  imports: [CommonModule, ExpensesRoutingModule],
})
export class ExpensesModule {}
