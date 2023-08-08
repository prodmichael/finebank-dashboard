import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformComponent } from './platform.component';

const routes: Routes = [
  {
    path: '',
    component: PlatformComponent,
    // canActivate: [AuthGuard],
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
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformRoutingModule {}
