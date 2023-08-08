import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview.component';
import { OverviewHomeComponent } from './pages/overview-home/overview-home.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
    canActivate: [],
    children: [
      {
        path: '',
        component: OverviewHomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewRoutingModule {}
