import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './bills.component';
import { BillsHomeComponent } from './pages/bills-home/bills-home.component';

const routes: Routes = [
  {
    path: '',
    component: BillsComponent,
    canActivate: [],
    children: [
      {
        path: '',
        component: BillsHomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillsRoutingModule {}
