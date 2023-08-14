import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './expenses.component';
import { ExpensesHomeComponent } from './pages/expenses-home/expenses-home.component';

const routes: Routes = [
  {
    path: '',
    component: ExpensesComponent,
    canActivate: [],
    children: [
      {
        path: '',
        component: ExpensesHomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensesRoutingModule {}
