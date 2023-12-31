import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformComponent } from './platform.component';

const routes: Routes = [
  {
    path: '',
    component: PlatformComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: 'overview',
        data: { routes: 'overview' },
        loadChildren: () =>
          import('./pages/overview/overview.module').then(
            (m) => m.OverviewModule
          ),
      },
      {
        path: 'balances',
        data: { routes: 'balances' },
        loadChildren: () =>
          import('./pages/balances/balances.module').then(
            (m) => m.BalancesModule
          ),
      },
      {
        path: 'transactions',
        data: { routes: 'transactions' },
        loadChildren: () =>
          import('./pages/transactions/transactions.module').then(
            (m) => m.TransactionsModule
          ),
      },
      {
        path: 'bills',
        data: { routes: 'bills' },
        loadChildren: () =>
          import('./pages/bills/bills.module').then((m) => m.BillsModule),
      },
      {
        path: 'expenses',
        data: { routes: 'expenses' },
        loadChildren: () =>
          import('./pages/expenses/expenses.module').then(
            (m) => m.ExpensesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformRoutingModule {}
