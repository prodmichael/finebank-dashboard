import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TransformNumberPipe } from 'src/app/module/shared/pipes/transform-number.pipe';
import { ButtonModule } from 'src/app/module/shared/ui-kit/button/button.module';
import { CardModule } from 'src/app/module/shared/ui-kit/card/card.module';
import { LoaderModule } from 'src/app/module/shared/ui-kit/loader/loader.module';
import { AppSpacingModule } from 'src/app/module/shared/ui-kit/spacing/app-spacing.module';
import { HeaderModule } from '../modules/header/header.module';
import { BalancesRoutingModule } from './balances-routing.module';
import { BalancesComponent } from './balances.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { BalancesHomeComponent } from './pages/balances-home/balances-home.component';
import { BalancesService } from './services/balances.service';

@NgModule({
  declarations: [
    BalancesComponent,
    BalancesHomeComponent,
    CreditCardComponent,
    TransformNumberPipe,
    AccountDetailsComponent,
  ],
  imports: [
    CommonModule,
    BalancesRoutingModule,
    CardModule,
    HeaderModule,
    AppSpacingModule,
    ButtonModule,
    MatIconModule,
    LoaderModule,
  ],
  providers: [BalancesService],
})
export class BalancesModule {}
