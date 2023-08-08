import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BalancesRoutingModule } from './balances-routing.module';
import { BalancesComponent } from './balances.component';
import { BalancesHomeComponent } from './pages/balances-home/balances-home.component';

@NgModule({
  declarations: [BalancesComponent, BalancesHomeComponent],
  imports: [CommonModule, BalancesRoutingModule],
})
export class BalancesModule {}
