import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BalancesRoutingModule } from './balances-routing.module';
import { BalancesComponent } from './balances.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { BalancesHomeComponent } from './pages/balances-home/balances-home.component';
import { BalancesService } from './services/balances.service';
import { CardModule } from 'src/app/module/shared/ui-kit/card/card.module';
import { HeaderModule } from '../modules/header/header.module';
import { NewcardModule } from 'src/app/module/shared/ui-kit/newcard/new-card.module';
import { AppSpacingModule } from 'src/app/module/shared/ui-kit/spacing/app-spacing.module';
import { ButtonModule } from 'src/app/module/shared/ui-kit/button/button.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [BalancesComponent, BalancesHomeComponent, CreditCardComponent],
  imports: [
    CommonModule,
    BalancesRoutingModule,
    NewcardModule,
    HeaderModule,
    AppSpacingModule,
    ButtonModule,
    MatIconModule,
  ],
  providers: [BalancesService],
})
export class BalancesModule {}
