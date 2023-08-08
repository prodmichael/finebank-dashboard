import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalancesComponent } from './balances.component';
import { BalancesHomeComponent } from './pages/balances-home/balances-home.component';

const routes: Routes = [
  {
    path: '',
    component: BalancesComponent,
    canActivate: [],
    children: [
      {
        path: '',
        component: BalancesHomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalancesRoutingModule {}
