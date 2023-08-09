import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalancesComponent } from './balances.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
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
      {
        path: 'details',
        component: AccountDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalancesRoutingModule {}
