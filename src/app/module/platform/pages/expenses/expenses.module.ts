import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'src/app/module/shared/ui-kit/card/card.module';
import { ItemModule } from 'src/app/module/shared/ui-kit/item/item.module';
import { AppSpacingModule } from 'src/app/module/shared/ui-kit/spacing/app-spacing.module';
import { HeaderModule } from '../modules/header/header.module';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';
import { ExpensesHomeComponent } from './pages/expenses-home/expenses-home.component';
import { ExpensesComparisonComponent } from './components/expenses-comparison/expenses-comparison.component';
import { ExpensesBreakdownComponent } from './components/expenses-breakdown/expenses-breakdown.component';

@NgModule({
  declarations: [ExpensesComponent, ExpensesHomeComponent, ExpensesComparisonComponent, ExpensesBreakdownComponent],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    AppSpacingModule,
    HeaderModule,
    CardModule,
    ItemModule,
  ],
})
export class ExpensesModule {}
